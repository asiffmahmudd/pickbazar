import { createContext, useContext, useState } from "react";

const CouponContext = createContext()

export function useCoupon(){
    return useContext(CouponContext)
}

export function CouponContextProvider({children}){
    const [appliedCoupon, setAppliedCoupon] = useState()
    
    const value = {
        appliedCoupon, setAppliedCoupon
    }

    return (
        <CouponContext.Provider value={value}>
            {children}
        </CouponContext.Provider>
    )
}