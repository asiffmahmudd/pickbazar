import React from 'react';
import { useState } from 'react';
import addresses from '../../../data/adresse';
import AddAddressModal from '../../Checkout/AddAddressModal';
import { BiPlus } from "react-icons/bi";

const ProfileAddressSection = () => {

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
            <div className="address profile-section">
                <h3 className="profile-header">Delivery Address</h3>
                <div className="profile-section-add-btn" onClick={() => setAddAddressIsOpen(true)}>
                    <BiPlus/> Add Address
                </div>
                <div className="row" id="deliveryAddress" name="deliveryAddress">
                    
                    {
                        addresses.map((address, index) => {
                            return (
                                <div key={index} className="col-md-4">
                                    <div className="panel panel-default card-input">
                                        <div className="panel-heading">{address.title}</div>
                                        <div className="panel-body">
                                            {address.desc}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            <AddAddressModal addAddress={addAddress} addAddressIsOpen={addAddressIsOpen} handleClose={handleClose}></AddAddressModal>
        </>
    );
};

export default ProfileAddressSection;