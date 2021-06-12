import React, { useState } from 'react';

const PaymentSection = ({register,errors, disable}) => {

    const [showVoucher, setShowVoucher] = useState(false)

    return (
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
            
            <div className="checkout-voucher mb-3 mt-3">
                {
                    showVoucher &&
                    <div className="voucher-input-container">
                        <div className="form-group d-flex">
                            <input type="text" className="form-control shadow-sm col-md-5" id="code" aria-describedby="code" placeholder="Enter voucher code here" />
                            <button type="submit" className="btn bg-theme ml-2 text-white">Apply</button>
                        </div>
                        
                    </div>
                }      
                {
                    !showVoucher &&
                    <div className="theme-text hover-pointer font-weight-bold" onClick={() => setShowVoucher(true)}>
                        Do you have a voucher?
                    </div>
                }           
            </div>
            
            <button type="submit" className="order-btn mt-5" disabled={disable}>Confirm Order</button>
        </div>

    );
};

export default PaymentSection;