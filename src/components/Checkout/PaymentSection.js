import React, { useState } from 'react';
import { useCoupon } from '../../contexts/CouponContext';
import CardPayment from './CardPayment';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useItem } from '../../contexts/ItemContext';

const PaymentSection = ({register,errors, disable}) => {

    const [showVoucher, setShowVoucher] = useState(false);
    const [showCard, setShowCard] = useState(false)
    const handleChange = (event) => {
        if(event.target.value === "card"){
            setShowCard(true);
        }
        else{
            setShowCard(false);
        }
    }

    const {allproducts} = useItem()
    const cartItems = useSelector(state => {
        return state.items.cartItems;
    })
    const items = allproducts.filter(pd => {
        let exists = cartItems.find(cartPd => {
            if(pd.id === cartPd.id){
                pd.count = cartPd.count
                return pd
            }
            else 
                return null
        })
        return exists? true : false
    })

    const {removeCoupon, appliedCoupon, error, couponHandler} = useCoupon()
    const handleCoupon = (e) => {
        e.preventDefault()
        let userCode = document.getElementById('code').value.toLowerCase()
        couponHandler(userCode)
    }

    const couponRemove = () => {
        removeCoupon()
    }

    return (
        <div className="payment checkout-section">
            <h3 className="section-header">Payment Option</h3>
            <div className="payment-method-container" {...register("paymentMethod", { required:true })} name="paymentMethod" id="payment" onChange={handleChange}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="cash" value="Cash on delivery"/>
                    <label className="form-check-label" htmlFor="cash">
                        Cash On Delivery
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="card" value="card"/>
                    <label className="form-check-label" htmlFor="card">
                        Debit Card
                    </label>
                </div>
            </div>
            {errors.paymentMethod?.type === 'required' && <span className="text-danger">Payment method is required</span>}
            {
                showCard &&
                <CardPayment></CardPayment>
            }
            {/* <div className="checkout-voucher mb-3 mt-3">
                {
                    showVoucher && !appliedCoupon &&
                    <div className="voucher-input-container">
                        <div className="form-group d-flex">
                            <input type="text" className="form-control shadow-sm col-md-5" id="code" aria-describedby="code" placeholder="Enter voucher code here" />
                            <button onClick={handleCoupon} className="btn bg-theme ml-2 text-white">Apply</button>
                        </div>
                        {
                            error && <p className="text-danger">{error}</p>
                        }
                    </div>
                } 

                {
                    items.length>0 && !showVoucher && !appliedCoupon &&
                    <div className="theme-text hover-pointer font-weight-bold" onClick={() => setShowVoucher(true)}>
                        Do you have a voucher?
                    </div>
                }   

                {
                    appliedCoupon && 
                    <div className="text-success ">
                        {appliedCoupon.name} coupon applied <AiOutlineCloseCircle onClick={couponRemove} className="hover-pointer" color="rgb(255, 110, 110)"></AiOutlineCloseCircle>
                    </div>
                }          
            </div> */}
            
            <button type="submit" className="order-btn mt-5" disabled={disable}>Confirm Order</button>
        </div>

    );
};

export default PaymentSection;