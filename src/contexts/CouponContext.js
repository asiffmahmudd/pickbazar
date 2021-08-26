import { createContext, useContext, useState } from "react";
import { useItem } from "./ItemContext";

const CouponContext = createContext()

export function useCoupon(){
    return useContext(CouponContext)
}

export function CouponContextProvider({children}){

    const {coupons} = useItem()
    
    const [appliedCoupon, setAppliedCoupon] = useState()
    const [error, setError] = useState()

    const couponHandler = (userCode, totalPrice) => {
        const validCoupon = coupons.find(coupon => userCode === coupon.code.toLowerCase())
        if(validCoupon){
            if(validCoupon.status.toLowerCase() !== "active"){
                setError("This coupon is no longer active")
            }
            else if(validCoupon.remainingCoupons === 0){
                setError("This coupon has crossed it's limit")
            }
            else if(totalPrice < validCoupon.minimumAmount){
                setError("Minimum required amount not met")
            }
            else{
                setError(null)
                validCoupon.remainingCoupons = validCoupon.remainingCoupons-1
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
        appliedCoupon, removeCoupon, error, setError, couponHandler, setAppliedCoupon
    }

    return (
        <CouponContext.Provider value={value}>
            {children}
        </CouponContext.Provider>
    )
}