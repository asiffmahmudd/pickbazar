import React from 'react';
import { BiPlus } from "react-icons/bi";

const ContactSection = ({register,errors}) => {
    return (
        <div className="contact checkout-section">
            <h3 className="section-header">Contact Number</h3>
            <button className="checkout-section-add-btn"><BiPlus/> Add Number</button>
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
            </div>
            {errors.contactNumber?.type === 'required' && <span className="text-danger">Contact Number is required</span>}
        </div>
    );
};

export default ContactSection;