import React, { useState } from 'react';
import { BiPlus } from "react-icons/bi";
import AddAddressModal from './AddAddressModal';

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

    const [addAddressIsOpen, setAddAddressIsOpen] = useState(false);

    const handleClose = () => {
        setAddAddressIsOpen(false)
    }
      

    const addAddress = () => {
        let title = document.getElementById("address-title").value;
        let desc = document.getElementById("address").value;
        if(!title || !desc){
            alert("Please fill out all inputs")
        }
        else{
            addresses.push({
                title,
                desc
            });
            setAddAddressIsOpen(false)
        }
    }

    return (
        <>
            <div className="address checkout-section">
                <h3 className="section-header">Delivery Address</h3>
                <div className="checkout-section-add-btn" onClick={() => setAddAddressIsOpen(true)}><BiPlus/> Add Address</div>
                <div className="radio-group row" id="deliveryAddress" name="deliveryAddress" {...register("deliveryAddress", { required:true })}>
                    
                    {
                        addresses.map((address, index) => {
                            return (
                                <label key={index} className="col-md-4">
                                    <input type="radio" name="deliveryAddress" className="card-input-element" value={address.desc}/>
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
            <AddAddressModal addAddress={addAddress} addAddressIsOpen={addAddressIsOpen} handleClose={handleClose}></AddAddressModal>
            

        </>
    );
};

export default AddressSection;