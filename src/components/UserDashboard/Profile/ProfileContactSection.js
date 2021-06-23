import React from 'react';
import { useState } from 'react';
import numbers from '../../../data/numbers';
import { BiPlus } from "react-icons/bi";
import AddContactModal from '../../Checkout/AddContactModal';

const ProfileContactSection = () => {

    const [addContactIsOpen, setAddContactIsOpen] = useState(false);

    const handleClose = () => {
        setAddContactIsOpen(false)
    }
      

    const addContact = () => {
        let title = document.getElementById("number-title").value;
        let desc = document.getElementById("number").value;

        if(!title || !desc){
            alert("Please fill out all inputs")
        }
        else{
            numbers.push({
                title,
                desc
            });
            setAddContactIsOpen(false)
        }
    }

    return (
        <>
            <div className="contact profile-section">
                <h3 className="profile-header">Contact Numbers</h3>
                <div className="profile-section-add-btn" onClick={() => setAddContactIsOpen(true)}>
                    <BiPlus/> Add Number
                </div>
                <div className="row" id="deliveryAddress" name="deliveryAddress">
                    
                    {
                        numbers.map((address, index) => {
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
            <AddContactModal addContact={addContact} addContactIsOpen={addContactIsOpen} handleClose={handleClose}></AddContactModal>
        </>
    );
};

export default ProfileContactSection;