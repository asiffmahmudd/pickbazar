import React from 'react';
import './Checkout.css';
import Header from '../Header/Header';

const Checkout = () => {
    return (
        <>
            <Header></Header>

            <div className="checkout container">
                    <div className="row mt-5">
                        <div className="col-md-9 p-lg-5 p-md-4 p-sm-4 p-3 mx-auto checkout-wrapper rounded">
                            <div className="checkout-overview p-lg-5 p-md-4 p-sm-4 p-3">
                                <div className="sub-total overview-item">
                                    <span>Sub Total (1 items)</span>
                                    <span>$1.50</span>
                                </div>
                                <div className="shipping overview-item">
                                    <span>Shipping fee</span>
                                    <span>$1.50</span>
                                </div>
                                <div className="voucher overview-item">
                                    <span>Voucher</span>
                                    <span>
                                        <form>
                                            <div className="voucher-input">
                                                <input type="text" className="form-control shadow-sm" id="code" aria-describedby="code" placeholder="Enter voucher code here" />
                                                <button type="submit" className="btn bg-theme">Apply</button>
                                            </div>
                                        </form>
                                    </span>
                                </div>
                                <div className="sub-total overview-item">
                                    <span>Total</span>
                                    <span>$1.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Checkout;