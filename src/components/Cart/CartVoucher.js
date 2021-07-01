import React, { useState } from 'react';
import { useCoupon } from '../../contexts/CouponContext';
import coupons from '../../data/coupons';
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartVoucher = () => {
    const [show, setShow] = useState(false);
    const {setAppliedCoupon, appliedCoupon} = useCoupon()
    const [error, setError] = useState()
    
    const handleCoupon = (e) => {
        e.preventDefault()
        let userCode = document.getElementById('code').value.toLowerCase()
        const validCoupon = coupons.find(coupon => userCode === coupon.code.toLowerCase())
        if(validCoupon){
            if(validCoupon.status !== "active"){
                setError("This coupon is no longer active")
            }
            else if(validCoupon.remainingCoupons === 0){
                setError("This coupon has crossed it's limit")
            }
            else{
                setError(null)
                setAppliedCoupon(validCoupon)
            }
        }
        else{
            setError("Invalid coupon")
        }
    }

    return (
        <div className="cart-voucher text-center mb-3">
            {
                
                show && !appliedCoupon &&
                <div className="voucher-input-container">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control shadow-sm" id="code" aria-describedby="code" placeholder="Enter voucher code here" />
                        </div>
                        <button className="btn" onClick={handleCoupon}>Apply</button>
                    </form>
                    {
                        error && <p className="text-danger">{error}</p>
                    }
                </div>
                
                
            }      
            {
                !show && !appliedCoupon &&
                <div className="text-center theme-text hover-pointer font-weight-bold" onClick={() => setShow(true)}>
                    Do you have a voucher?
                </div>
            } 

            {
                appliedCoupon && 
                <div className="text-success ">
                    {appliedCoupon.name} coupon applied <AiOutlineCloseCircle onClick={()=>setAppliedCoupon(null)} className="hover-pointer" color="rgb(255, 110, 110)"></AiOutlineCloseCircle>
                </div>
            }          
        </div>
    );
};

export default CartVoucher;