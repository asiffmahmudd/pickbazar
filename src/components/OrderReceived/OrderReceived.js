import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCoupon } from '../../contexts/CouponContext';
import Header from '../Header/Header';
import './OrderReceived.css'

const OrderReceived = () => {

    const location = useLocation();

    const items = location.state.data.items
    const data = location.state.data
    
    var dayjs = require('dayjs')
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)

    
    let totalPrice = 0;
    for(let i = 0; i < items.length; i++){
        if(items[i].discount > 0){
            totalPrice += items[i].sale*items[i].count;
        }
        else{
            totalPrice += items[i].price*items[i].count;
        }
    }

    const {appliedCoupon} = useCoupon()
    if(appliedCoupon){
        totalPrice = totalPrice*((100-appliedCoupon.discount)/100)
    }

    return (
        <>
            <Header></Header>

            <div className="order-received container" style={{marginTop:'6rem'}}>
                <div className="row">
                    <div className="col-md-9 mx-auto mt-5 mb-5 bg-white rounded">
                        <div className="btn-container mt-3 text-right">
                            <Link to="/"><button className="btn">Back to Home</button></Link>
                        </div>
                        <div className="order-received pl-5 pb-5 pr-5">
                            <h2 className="order-title">Order Received</h2>
                            <p className="order-received-para">Thank you. Your order has been received</p>
                            <div className="order-info-container mt-4">
                                <div className="order-number order-info-item">
                                    <p className="order-number-title">Order Number</p>
                                    <p className="order-number-para">1234</p>
                                </div>
                                <div className="order-date order-info-item">
                                    <p className="order-number-title">Date</p>
                                    <p className="order-number-para">{dayjs().format('LLL')}</p>
                                </div>
                                <div className="order-amount order-info-item ">
                                    <p className="order-number-title">Total Amount</p>
                                    <p className="order-number-para">${totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="order-method order-info-item">
                                    <p className="order-number-title">Payment Method</p>
                                    <p className="order-number-para">{data.paymentMethod}</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-details pl-5 pb-5 pr-5">
                            <h2 className="order-title">Order Details</h2>
                            <div className="order-details-container mt-4">
                                <div className="total-item order-details-item">
                                    <div className="order-details-title">
                                        <p>Total Item</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>{items.length} Items</p>
                                    </div>
                                </div>
                                <div className="order-time order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Order Time</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>{dayjs().format('LLL')}</p>
                                    </div>
                                </div>
                                <div className="delivery-time order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Delivery Time</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>{data.deliverySchedule}</p>
                                    </div>
                                </div>
                                <div className="delivery-location order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Delivery Location</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>{data.deliveryAddress}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-details pl-5 pb-5 pr-5">
                            <h2 className="order-title">Total Amount</h2>
                            <div className="order-details-container mt-4">
                                <div className="total-item order-details-item">
                                    <div className="order-details-title">
                                        <p>Sub Total</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>${totalPrice.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="order-time order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Payment Method</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>{data.paymentMethod}</p>
                                    </div>
                                </div>
                                <div className="delivery-time order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Total</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>${totalPrice.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderReceived;