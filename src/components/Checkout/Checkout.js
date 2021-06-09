import React from 'react';
import './Checkout.css';
import Header from '../Header/Header';

const Checkout = () => {
    return (
        <>
            <Header></Header>

            <div className="checkout container">
                <form>
                    <div className="row mt-5 mb-5">
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
                                
                                <div className="radio-group row" id="delivery-schedule">
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" class="card-input-element"/>
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">Express-Delivery</div>
                                            <div class="panel-body">
                                            90 min express delivery
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">8am-11am</div>
                                            <div class="panel-body">
                                            8.00 AM - 11.00 AM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">11am-2pm</div>
                                            <div class="panel-body">
                                            11.00 AM - 2.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">2pm-5pm</div>
                                            <div class="panel-body">
                                            2.00 PM - 5.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4" >
                                        <input type="radio" name="delivery-schedule" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">5pm-8pm</div>
                                            <div class="panel-body">
                                            5.00 PM - 8.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">Next Day</div>
                                            <div class="panel-body">
                                            Next Day
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="delivery-schedule">
                                <h3 className="section-header">Delivery Address</h3>
                                <div className="radio-group row" id="delivery-address">
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-address" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">Home</div>
                                            <div class="panel-body">
                                            27 Street, 2569 Heritage Road Visalia, CA 93291
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-address" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">Office</div>
                                            <div class="panel-body">
                                            33 Baker Street, Crescent Road, CA 65746
                                            </div>
                                        </div>
                                    </label>
                                    <div className="col-md-4">
                                        <button className="add-btn w-100">Add Address</button>
                                    </div>
                                </div>
                            </div>

                            <div className="contact pb-5">
                                <h3 className="section-header">Contact Number</h3>
                                <div className="radio-group row" id="contact-number">
                                    <label className="col-md-4">
                                        <input type="radio" name="contact-number" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">Primary</div>
                                            <div class="panel-body">
                                            019123456678
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="contact-number" class="card-input-element" />
                                        <div class="panel panel-default card-input">
                                            <div class="panel-heading">Secondary</div>
                                            <div class="panel-body">
                                            019231123232
                                            </div>
                                        </div>
                                    </label>
                                    <div className="col-md-4">
                                        <button className="add-btn add-contact w-100">Add Contact</button>
                                    </div>
                                </div>
                            </div>
                            
                            <hr />

                            <div className="payment pt-5">
                                <h3 className="section-header">Payment Option</h3>
                                <div className="payment-method" id="payment">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="payment" id="cash" value="option1" checked/>
                                        <label class="form-check-label" for="cash">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="payment" id="card" value="option2"/>
                                        <label class="form-check-label" for="card">
                                            Debit Card
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button className="order-btn mt-5">Confirm Order</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;