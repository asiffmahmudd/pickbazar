import React, { useState } from 'react';
import { useCoupon } from '../../contexts/CouponContext';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useItem } from '../../contexts/ItemContext';

const CartVoucher = () => {
    const [show, setShow] = useState(false);
    const {allproducts} = useItem()

    const cartItems = useSelector(state => {
        return state.items.cartItems;
    })

    const items = allproducts.filter(pd => {
        let exists = cartItems.find(cartPd => {
            if(pd._id === cartPd._id){
                pd.count = cartPd.count
                return pd
            }
            else 
                return null
        })
        return exists? true : false
    })
    
    const {removeCoupon, setAppliedCoupon, appliedCoupon, error, couponHandler} = useCoupon()
    const handleCoupon = (e) => {
        e.preventDefault()
        let userCode = document.getElementById('code').value.toLowerCase()
        couponHandler(userCode)
    }

    const couponRemove = () => {
        removeCoupon()
    }

    useEffect(()=> {
        setAppliedCoupon();
    }, [setAppliedCoupon])

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
                items.length > 0 && !show && !appliedCoupon &&
                <div className="text-center theme-text hover-pointer font-weight-bold" onClick={() => setShow(true)}>
                    Do you have a voucher?
                </div>
            } 

            {
                appliedCoupon && 
                <div className="text-success ">
                    {appliedCoupon.name} coupon applied <AiOutlineCloseCircle onClick={couponRemove} className="hover-pointer" color="rgb(255, 110, 110)"></AiOutlineCloseCircle>
                </div>
            }          
        </div>
    );
};

export default CartVoucher;