import React from 'react';
import './Checkout.css';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";

const Checkout = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Header></Header>

            <div className="checkout container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-5 mb-5 justify-content-center">
                        <div className="col-md-7 p-lg-5 p-md-4 p-sm-4 p-3 checkout-wrapper">
                            
                            <div className="schedule checkout-section">
                                <h3 className="section-header">Delivery Schedule</h3>
                                
                                <div className="radio-group row" {...register("deliverySchedule", { required:true })} id="deliverySchedule" name="deliverySchedule">
                                    <label className="col-md-4">
                                        <input type="radio" name="deliverySchedule" className="card-input-element" value="90 min express delivery"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Express-Delivery</div>
                                            <div className="panel-body">
                                            90 min express delivery
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="deliverySchedule" className="card-input-element" value="8am-11am"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">8am-11am</div>
                                            <div className="panel-body">
                                            8.00 AM - 11.00 AM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="deliverySchedule" className="card-input-element" value="11am-2pm"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">11am-2pm</div>
                                            <div className="panel-body">
                                            11.00 AM - 2.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="deliverySchedule" className="card-input-element" value="2pm-5pm"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">2pm-5pm</div>
                                            <div className="panel-body">
                                            2.00 PM - 5.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4" >
                                        <input type="radio" name="deliverySchedule" className="card-input-element" value="5pm-8pm"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">5pm-8pm</div>
                                            <div className="panel-body">
                                            5.00 PM - 8.00 PM
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="deliverySchedule" className="card-input-element" value="Next day"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Next Day</div>
                                            <div className="panel-body">
                                            Next Day
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                {errors.deliverySchedule?.type === 'required' && <span className="text-danger">Delivery schedule is required</span>}
                            </div>

                            <div className="address checkout-section">
                                <h3 className="section-header">Delivery Address</h3>
                                <div className="radio-group row" id="deliveryAddress" name="deliveryAddress" {...register("deliveryAddress", { required:true })}>
                                    <label className="col-md-4">
                                        <input type="radio" name="deliveryAddress" className="card-input-element" value="home"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Home</div>
                                            <div className="panel-body">
                                            27 Street, 2569 Heritage Road Visalia, CA 93291
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="deliveryAddress" className="card-input-element" value="office"/>
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
                                {errors.deliveryAddress?.type === 'required' && <span className="text-danger">Delivery address is required</span>}
                            </div>

                            <div className="contact checkout-section">
                                <h3 className="section-header">Contact Number</h3>
                                <div className="radio-group row" id="contactNumber" name="contactNumber" {...register("contactNumber", { required:true })}>
                                    <label className="col-md-4">
                                        <input type="radio" name="contactNumber" className="card-input-element" value="1234"/>
                                        <div className="panel panel-default card-input">
                                            <div className="panel-heading">Primary</div>
                                            <div className="panel-body">
                                            019123456678
                                            </div>
                                        </div>
                                    </label>
                                    <label className="col-md-4">
                                        <input type="radio" name="contactNumber" className="card-input-element" value="4321"/>
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
                                {errors.contactNumber?.type === 'required' && <span className="text-danger">Contact Number is required</span>}
                            </div>

                            <div className="payment checkout-section">
                                <h3 className="section-header">Payment Option</h3>
                                <div className="payment-method-container" {...register("paymentMethod", { required:true })} name="paymentMethod" id="payment" >
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="cash" value="cash"/>
                                        <label className="form-check-label" htmlFor="cash">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="card" value="card"/>
                                        <label className="form-check-label" htmlFor="card">
                                            Debit Card
                                        </label>
                                    </div>
                                </div>
                                {errors.paymentMethod?.type === 'required' && <span className="text-danger">Payment method is required</span>}
                                <button type="submit" className="order-btn mt-5">Confirm Order</button>
                            </div>

                            
                        </div>


                        <div className="col-md-3">
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
                        </div>


                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;