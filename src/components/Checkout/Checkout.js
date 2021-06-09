import React from 'react';
import './Checkout.css';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";

const Checkout = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Header></Header>

            <div className="checkout container">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                            <div className="voucher-input">
                                                <input type="text" className="form-control shadow-sm" id="code" aria-describedby="code" placeholder="Enter voucher code here" />
                                                <button type="submit" className="btn bg-theme">Apply</button>
                                            </div>
                                    </span>
                                </div>
                                <div className="sub-total summary-item">
                                    <span>Total</span>
                                    <span>$1.50</span>
                                </div>
                            </div>
                            

                            <div className="schedule mt-5">
                                <h3 className="section-header">Delivery Schedule</h3>
                                
                                <div className="radio-group row" {...register("delivery-schedule")} id="delivery-schedule" name="delivery-schedule">
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" className="card-input-element" value="90 min express delivery" defaultChecked/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Express-Delivery</div>
                                            <div className="panel-body">
                                            90 min express delivery
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" className="card-input-element" value="8am-11am"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">8am-11am</div>
                                            <div className="panel-body">
                                            8.00 AM - 11.00 AM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" className="card-input-element" value="11am-2pm"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">11am-2pm</div>
                                            <div className="panel-body">
                                            11.00 AM - 2.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" className="card-input-element" value="2pm-5pm"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">2pm-5pm</div>
                                            <div className="panel-body">
                                            2.00 PM - 5.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4" >
                                        <input type="radio" name="delivery-schedule" className="card-input-element" value="5pm-8pm"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">5pm-8pm</div>
                                            <div className="panel-body">
                                            5.00 PM - 8.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-schedule" className="card-input-element" value="Next day"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Next Day</div>
                                            <div className="panel-body">
                                            Next Day
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="address mt-5">
                                <h3 className="section-header">Delivery Address</h3>
                                <div className="radio-group row" id="delivery-address" name="delivery-address" {...register("delivery-address")}>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-address" className="card-input-element" value="home" defaultChecked/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Home</div>
                                            <div className="panel-body">
                                            27 Street, 2569 Heritage Road Visalia, CA 93291
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="delivery-address" className="card-input-element" value="office"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Office</div>
                                            <div className="panel-body">
                                            33 Baker Street, Crescent Road, CA 65746
                                            </div>
                                        </div>
                                    </label>
                                    <div className="col-md-4">
                                        <button className="add-btn w-100">Add Address</button>
                                    </div>
                                </div>
                            </div>

                            <div className="contact mt-5 pb-5">
                                <h3 className="section-header">Contact Number</h3>
                                <div className="radio-group row" id="contact-number" name="contact-number" {...register("contact-number")}>
                                    <label className="col-md-4">
                                        <input type="radio" name="contact-number" className="card-input-element" value="1234" defaultChecked/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Primary</div>
                                            <div className="panel-body">
                                            019123456678
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="contact-number" className="card-input-element" value="4321"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Secondary</div>
                                            <div className="panel-body">
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
                                <div className="payment-method-container" {...register("payment-method")} name="payment-method" id="payment" >
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="payment-method" id="cash" value="cash" defaultChecked/>
                                        <label className="form-check-label" htmlFor="cash">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="payment-method" id="card" value="card"/>
                                        <label className="form-check-label" htmlFor="card">
                                            Debit Card
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="order-btn mt-5">Confirm Order</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;