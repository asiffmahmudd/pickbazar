import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiPlus } from "react-icons/bi";
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../Loading/Loading';
import AddContactModal from './AddContactModal';
import ContactItem from './ContactItem';


const ContactSection = ({register,errors, customer}) => {
   
    const [addContactIsOpen, setAddContactIsOpen] = useState(false);
    const [numbers, setNumbers] = useState([])
    const {loggedInUser} = useAuth()
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setNumbers(customer?.contactNumber || [])
    },[customer?.contactNumber])
    console.log()

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
            const newList = numbers
            newList.push({
                title,
                desc
            });
            setNumbers(newList)
            setAddContactIsOpen(false) 
            updateNumbersInDatabase(newList)
        }
    }

    const updateNumbersInDatabase = (newList) => {
        setLoading(true)
        fetch('http://localhost:4000/updateCustomerContact/'+loggedInUser.uid, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(newList)
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

    const handleDelete = (index) =>{
        const newList = [...numbers]
        newList.splice(index,1)
        setNumbers(newList)
        updateNumbersInDatabase(newList)
    }

    return (
        <>
            <Loading loading={loading}></Loading>
            <div className="contact checkout-section">
                <h3 className="section-header">Contact Number</h3>
                <div className="checkout-section-add-btn hover-pointer" onClick={() => setAddContactIsOpen(true)}><BiPlus/> Add Number</div>
                <div className="radio-group row" id="contactNumber" name="contactNumber" {...register("contactNumber", { required:true })}>
                    
                    {
                        numbers?.map((number,index) => <ContactItem key={index} number={number} updateNumbersInDatabase={updateNumbersInDatabase} numbers={numbers} index={index} setNumbers={setNumbers} handleDelete={handleDelete}></ContactItem>)
                    }
                    

                </div>
                {errors.contactNumber?.type === 'required' && <span className="text-danger">Contact Number is required</span>}
            </div>
            <AddContactModal addContact={addContact} addContactIsOpen={addContactIsOpen} handleClose={handleClose} ></AddContactModal>
        </>
    );
};

export default ContactSection;