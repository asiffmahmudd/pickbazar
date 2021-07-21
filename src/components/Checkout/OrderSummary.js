import React from 'react';
import { MdRemoveShoppingCart } from "react-icons/md";
import { useCoupon } from '../../contexts/CouponContext';

const OrderSummary = ({items}) => {
    
    const {appliedCoupon} = useCoupon()
    

    let totalPrice = 0
    for(let i= 0; i < items.length; i++){
        if(items[i].discount > 0){
            totalPrice += items[i].sale*items[i].count;
        }
        else{
            totalPrice += items[i].price*items[i].count;
        }
    }

    let discount = 0;
    if(appliedCoupon)
        discount = totalPrice*(appliedCoupon.discount/100)

    let shipping = 0;
    
    return (
        <div className="col-lg-3 offset-lg-1 mb-5 order-summary">
            <div className="order-summary-container">
                <p className="text-center font-weight-bold">Your order</p>
                {
                    items.map((item,index) => {
                        return (
                            <div key={index} className="checkout-cart-item d-flex justify-content-between">
                                <div>
                                    <span>{item.count} x </span>
                                    <span>{item.name}</span>
                                </div>
                                <div>
                                    <span>${item.sale?(item.sale*item.count).toFixed(2):(item.price*item.count).toFixed(2)}</span>    
                                </div>  
                            </div>
                        )
                    })
                }
                
                {
                    !items.length &&
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="p-3">
                            <MdRemoveShoppingCart className="mb-4" size={180} color="#009e7f"></MdRemoveShoppingCart>
                            <p className="text-center">No products found</p>
                        </div>
                    </div>
                }

                <hr />
                <div className="sub-total summary-item">
                    <span>Sub Total ({items.length} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                {
                    appliedCoupon &&
                    <div className="discount summary-item">
                        <span>Discount ({appliedCoupon.code})</span>
                        <span>${discount.toFixed(2)}</span>
                    </div>
                }
                <div className="shipping summary-item">
                    <span>Shipping fee</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="sub-total summary-item">
                    <span>Total</span>
                    <span>${(totalPrice+shipping-discount).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;