import React, { useState } from 'react';
import { BiPlus } from "react-icons/bi";

const addresses = [
    {
        title: "Home",
        desc: "27 Street, 2569 Heritage Road Visalia, CA 93291"
    },
    {
        title: "Office",
        desc: "33 Baker Street, Crescent Road, CA 65746"
    },
]

const AddressSection = ({register,errors}) => {

    

    return (
        <>
            <div className="address checkout-section">
                <h3 className="section-header">Delivery Address</h3>
                <button className="checkout-section-add-btn"><BiPlus/> Add Address</button>
                <div className="radio-group row" id="deliveryAddress" name="deliveryAddress" {...register("deliveryAddress", { required:true })}>
                    
                    {
                        addresses.map((address, index) => {
                            return (
                                <label key={index} className="col-md-4">
                                    <input type="radio" name="deliveryAddress" className="card-input-element" value="home"/>
                                    <div className="panel panel-default card-input">
                                        <div className="panel-heading">{address.title}</div>
                                        <div className="panel-body">
                                            {address.desc}
                                        </div>
                                    </div>
                                </label>
                            )
                        })
                    }
                    
                </div>
                {errors.deliveryAddress?.type === 'required' && <span className="text-danger">Delivery address is required</span>}
            </div>
            
            

        </>
    );
};

export default AddressSection;