import { createContext, useContext, useState } from "react";
import coupons from "../data/coupons";

const CouponContext = createContext()

export function useCoupon(){
    return useContext(CouponContext)
}

export function CouponContextProvider({children}){

    const [appliedCoupon, setAppliedCoupon] = useState()
    const [error, setError] = useState()

    const couponHandler = (userCode) => {
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

    const removeCoupon = () => {
        setAppliedCoupon(null);
        localStorage.removeItem('coupon')   
    }

    const value = {
        appliedCoupon, removeCoupon, error, couponHandler, setAppliedCoupon
    }

    return (
        <CouponContext.Provider value={value}>
            {children}
        </CouponContext.Provider>
    )
}