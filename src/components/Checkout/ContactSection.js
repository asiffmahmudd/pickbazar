import React, { useState } from 'react';
import { BiPlus } from "react-icons/bi";
import numbers from '../../data/numbers';
import AddContactModal from './AddContactModal';


const ContactSection = ({register,errors}) => {
   

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
            <div className="contact checkout-section">
                <h3 className="section-header">Contact Number</h3>
                <div className="checkout-section-add-btn hover-pointer" onClick={() => setAddContactIsOpen(true)}><BiPlus/> Add Number</div>
                <div className="radio-group row" id="contactNumber" name="contactNumber" {...register("contactNumber", { required:true })}>
                    
                    {
                        numbers.map((number,index) => {
                            return (
                                <label key={index} className="col-md-4">
                                    <input type="radio" name="contactNumber" className="card-input-element" value={number.desc}/>
                                    <div className="panel panel-default card-input">
                                        <div className="panel-heading">{number.title}</div>
                                        <div className="panel-body">
                                        {number.desc}
                                        </div>
                                    </div>
                                </label>
                            )
                        })
                    }
                    

                </div>
                {errors.contactNumber?.category === 'required' && <span className="text-danger">Contact Number is required</span>}
            </div>
            <AddContactModal addContact={addContact} addContactIsOpen={addContactIsOpen} handleClose={handleClose} ></AddContactModal>
        </>
    );
};

export default ContactSection;