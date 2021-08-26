import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiPlus } from "react-icons/bi";
import { callAddContact, deleteContactNumber, getAllContacts, updateContacts } from '../../utils/network';
import Loading from '../Loading/Loading';
import AddContactModal from './AddContactModal';
import ContactItem from './ContactItem';
 

const ContactSection = ({register,errors, customer}) => {
   
    const [addContactIsOpen, setAddContactIsOpen] = useState(false);
    const [numbers, setNumbers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setNumbers(customer?.contactNumber || [])
    },[customer?.contactNumber])

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
            const number = {title, desc}
            
            setLoading(true)
            const user = JSON.parse(localStorage.getItem('user')) 
            
            callAddContact(number, user.token)
            .then(result => {
                window.location.reload();
                // setLoading(false)
            })
        }
    }

    useEffect(() => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        getAllContacts(user.token)
        .then(result => {
            setLoading(false)
            setNumbers(result)
        })
        // fetch('https://api.onimamzad.com/api/frontEnd/deliveryAddress', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: user.token
        //     }
        // })
        // .then(res => res.json())
        // .then(result => {
        //     setLoading(false)
        //     setNumbers(result)
        // })
    },[])

    const updateNumbersInDatabase = (title,desc,index) => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        const number = {
            title, desc
        }
        updateContacts(number, numbers[index].id, user.token)
        .then(result => {
            setLoading(false)
        })
        // fetch('https://pickbazar-clone.herokuapp.com/updateCustomerContact/'+loggedInUser.uid, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         authorization: `Bearer ${localStorage.getItem('token')}`
        //     },
        //     body: JSON.stringify(newList)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if(data){
                
        //     }
        //     setLoading(false)
        // })
        // .catch(error => {
        //     setLoading(false)
        //     alert(error.message)
        // })
    }

    const deleteNumber = (index) => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        deleteContactNumber(numbers[index].id, user.token)
        .then(result => {
            setLoading(false)
        })
    }

    const handleDelete = (index) =>{
        const newList = [...numbers]
        newList.splice(index,1)
        setNumbers(newList)
        deleteNumber(index)
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