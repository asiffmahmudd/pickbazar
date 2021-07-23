import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiPlus } from "react-icons/bi";
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../Loading/Loading';
import AddContactModal from './AddContactModal';


const ContactSection = ({register,errors, customer}) => {
   

    const [addContactIsOpen, setAddContactIsOpen] = useState(false);
    const [numbers, setNumbers] = useState([])

    useEffect(()=> {
        setNumbers(customer?.contactNumber || [])
    },[customer?.contactNumber])

    const handleClose = () => {
        setAddContactIsOpen(false)
    }
    
    const {loggedInUser} = useAuth()
    const [loading, setLoading] = useState(false)

    const addContact = () => {
        let title = document.getElementById("number-title").value;
        let desc = document.getElementById("number").value;

        if(!title || !desc){
            alert("Please fill out all inputs")
        }
        else{
            setLoading(true)
            const newList = numbers
            newList.push({
                title,
                desc
            });
            setNumbers(newList)
            setAddContactIsOpen(false)

            fetch('http://localhost:4000/updateCustomerContact/'+loggedInUser.uid, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(numbers)
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    
                }
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                alert(error.message)
            })
        }
    }

    return (
        <>
            <Loading loading={loading}></Loading>
            <div className="contact checkout-section">
                <h3 className="section-header">Contact Number</h3>
                <div className="checkout-section-add-btn hover-pointer" onClick={() => setAddContactIsOpen(true)}><BiPlus/> Add Number</div>
                <div className="radio-group row" id="contactNumber" name="contactNumber" {...register("contactNumber", { required:true })}>
                    
                    {
                        numbers?.map((number,index) => {
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
                {errors.contactNumber?.type === 'required' && <span className="text-danger">Contact Number is required</span>}
            </div>
            <AddContactModal addContact={addContact} addContactIsOpen={addContactIsOpen} handleClose={handleClose} ></AddContactModal>
        </>
    );
};

export default ContactSection;