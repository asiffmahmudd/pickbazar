import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './OrderReceived.css'

const OrderReceived = () => {
    return (
        <>
            <Header></Header>

            <div className="order-received">
                <div className="row">
                    <div className="col-md-7 mx-auto mt-5 mb-5 bg-white rounded">
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
                                    <p className="order-number-para">March 23, 2019</p>
                                </div>
                                <div className="order-amount order-info-item ">
                                    <p className="order-number-title">Total Amount</p>
                                    <p className="order-number-para">$10,200</p>
                                </div>
                                <div className="order-method order-info-item">
                                    <p className="order-number-title">Payment Method</p>
                                    <p className="order-number-para">Cash on delivery</p>
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
                                        <p>6 Items</p>
                                    </div>
                                </div>
                                <div className="order-time order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Order Time</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>1.00pm 10/12/19</p>
                                    </div>
                                </div>
                                <div className="delivery-time order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Delivery Time</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>90 Minute Express Delivery</p>
                                    </div>
                                </div>
                                <div className="delivery-location order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Delivery Location</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North</p>
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
                                        <p>$10,200</p>
                                    </div>
                                </div>
                                <div className="order-time order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Payment Method</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>Cash on delivery</p>
                                    </div>
                                </div>
                                <div className="delivery-time order-details-item mt-1">
                                    <div className="order-details-title">
                                        <p>Total</p>
                                    </div>
                                    <div className="order-details-para">
                                        <p>$10,200</p>
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