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

async function payWithCard(){
    const paymentInfo = await handleSubmit();
    return paymentInfo;
}

const Checkout = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCart())
    },[dispatch])   
    
    const items = useSelector(state => state.items.cartItems)
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        if(data.paymentMethod === 'card'){
            const paymentInfo = await payWithCard();
            data.paymentInfo = paymentInfo;
            console.log(paymentInfo)
        }
        else{
            console.log(data)
        }
        data.items = items;
        dispatch(clearCart())
        history.push({
            pathname: '/order-received',
            state: {data}
        })
    };

    return (
        <>
            <Header></Header>

            <div className="checkout container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-5 mb-5 justify-content-center form-row">
                        <div className="col-lg-7 checkout-wrapper">
                            
                            <DeliverySchedule register={register} errors={errors}></DeliverySchedule>

                            <AddressSection register={register} errors={errors}></AddressSection>

                            <ContactSection register={register} errors={errors}></ContactSection>

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