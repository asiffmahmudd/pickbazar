import React, { useEffect } from 'react';
import './Checkout.css';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import OrderSummary from './OrderSummary';
import PaymentSection from './PaymentSection';
import ContactSection from './ContactSection';
import AddressSection from './AddressSection';
import DeliverySchedule from './DeliverySchedule';
import { useDispatch, useSelector } from 'react-redux';
import { handleSubmit } from './SimpleCard';
import { useHistory } from 'react-router-dom';
import { clearCart, loadCart } from '../../Redux/Actions/CartActions';
import { useItem } from '../../contexts/ItemContext';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import { useAuth } from '../../contexts/AuthContext';
import { useCoupon } from '../../contexts/CouponContext';

async function payWithCard(){
    const paymentInfo = await handleSubmit();
    return paymentInfo;
}

const Checkout = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCart())
    },[dispatch])   
    
    const {allproducts, loading, couponLoading, setCouponLoading, setProductChange} = useItem()
    const cartItems = useSelector(state => {
        return state.items.cartItems;
    })
    
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(allproducts.filter(pd => {
            let exists = cartItems.find(cartPd => {
                if(pd._id === cartPd._id){
                    pd.count = cartPd.count
                    return pd
                }
                else 
                    return null
            })
            return exists? true : false
        }))
    }, [allproducts,cartItems])

    const history = useHistory();
    const [orderLoading, setOrderLoading] = useState(false)
    const {loggedInUser} = useAuth()
    const uniqid = require('uniqid');
    
    var dayjs = require('dayjs')
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)

    let totalPrice = 0;
    for(let i = 0; i < items?.length; i++){
        if(items[i].discount > 0){
            totalPrice += items[i].sale*items[i].count;
        }
        else{
            totalPrice += items[i].price*items[i].count;
        }
    }

    const {appliedCoupon} = useCoupon()
    let discount = 0
    if(appliedCoupon){
        const priceAfterDiscount = totalPrice*((100-appliedCoupon.discount)/100)
        discount = Number((totalPrice-priceAfterDiscount).toFixed(2))
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const updateProduct = async (items) => {
        items = items.map(item=> {
            return {
                id: item._id,
                quantity: item.quantity-item.count
            }
        })
        items.map(async item => {
            await fetch('http://localhost:4000/updateProductQuantity', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                }
            })
            .catch(error => {
                alert(error.message)
            })
        })
    }

    const updateCustomerData = async () =>{
        await fetch('http://localhost:4000/customer/'+loggedInUser.uid)
        .then(res => res.json())
        .then(async result => {
            const currentAmount = result[0].totalAmount || 0
            const currentOrder = result[0].orders || 0
            const totalAmount = currentAmount + totalPrice - discount
            const orders = currentOrder + 1
            await fetch('http://localhost:4000/updateCustomerOrder/'+loggedInUser.uid,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({totalAmount:totalAmount, orders:orders})
            })
        })
        .catch(e => {
            alert(e.message)
        })
    }
    
    const onSubmit = async data => {
        if(data.paymentMethod === 'card'){
            const paymentInfo = await payWithCard();
            data.paymentInfo = paymentInfo;
        }
        
        data.orderId = uniqid()
        data.customerId = loggedInUser.uid
        data.orderDate = dayjs().format('LLL') 
        data.amount = totalPrice
        data.discount = discount
        const passData = {...data}
        passData.products = items
        data.products = items.map(item=> {
            return {
                id: item._id,
                count: item.count
            }
        })
        data.status = "pending"
        setOrderLoading(true)
        updateProduct(items)
        updateCustomerData()
        fetch('http://localhost:4000/addOrder',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            setOrderLoading(false)
            if(result){
                dispatch(clearCart())
                setProductChange(true)
                setProductChange(false)
                history.push({
                    pathname: '/order-received',
                    state: {passData}
                })
            }
        })
        .catch(e => alert(e.message))
        
        if(appliedCoupon){
            setCouponLoading(true)
            fetch('http://localhost:4000/updateCoupon/'+appliedCoupon._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appliedCoupon)
            })
            .then(response => response.json())
            .then(data => {
                if(data){ 
                }
                setCouponLoading(false)
            })
            .catch(error => {
                setCouponLoading(false)
                alert(error.message)
            })
        }
    };

    
    const [customer, setCustomer] = useState({})
    const [customerLoading, setCustomerLoading] = useState(false)
    useEffect(() => {
        setCustomerLoading(true)
        fetch('http://localhost:4000/customer/'+loggedInUser.uid)
        .then(res => res.json())
        .then(result => {
            setCustomer(result)
            setCustomerLoading(false)
        })
        .catch(e => {
            setCustomerLoading(false)
            alert(e.message)
        })
    },[loggedInUser.uid])

    return (
        <>
            <Header></Header>
            <Loading loading={couponLoading}></Loading>
            <Loading loading={orderLoading}></Loading>
            <Loading loading={customerLoading}></Loading>
            <Loading loading={loading}></Loading>
            <div className="checkout container" style={{marginTop:'10rem'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-5 mb-5 justify-content-center form-row">
                        <div className="col-lg-7 checkout-wrapper">
                            
                            <DeliverySchedule register={register} errors={errors}></DeliverySchedule>

                            <AddressSection register={register} customer={customer[0]} errors={errors}></AddressSection>

                            <ContactSection register={register} customer={customer[0]} errors={errors}></ContactSection>

                            <PaymentSection disable={items.length === 0} register={register} errors={errors}></PaymentSection>
                            
                        </div>


                        <OrderSummary items={items}></OrderSummary>


                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;