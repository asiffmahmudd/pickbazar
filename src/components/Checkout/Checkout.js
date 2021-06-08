import React from 'react';
import './Checkout.css';
import Header from '../Header/Header';

const Checkout = () => {
    return (
        <>
            <Header></Header>

            <div className="checkout container">
                <form>
                    <div className="row mt-5">
                        <div className="col-md-9 p-lg-5 p-md-4 p-sm-4 p-3 mx-auto checkout-wrapper rounded">

                            <div className="order-summary p-lg-5 p-md-4 p-sm-4 p-3">
                                <div className="sub-total summary-item">
                                    <span>Sub Total (1 items)</span>
                                    <span>$1.50</span>
                                </div>
                                <div className="shipping summary-item">
                                    <span>Shipping fee</span>
                                    <span>$1.50</span>
                                </div>
                                <div className="voucher summary-item">
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
                                <div className="sub-total summary-item">
                                    <span>Total</span>
                                    <span>$1.50</span>
                                </div>
                            </div>

                            <div className="delivery-schedule">
                                <h3 className="section-header">Delivery Schedule</h3>
                                <div className="radio-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>
                                                <input type="radio" name="product" class="card-input-element" />
                                                <div class="panel panel-default card-input">
                                                    <div class="panel-heading">Product B</div>
                                                    <div class="panel-body">
                                                        Product specific content
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label>
                                                <input type="radio" name="product" class="card-input-element" />
                                                <div class="panel panel-default card-input">
                                                    <div class="panel-heading">Product B</div>
                                                    <div class="panel-body">
                                                        Product specific content
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;