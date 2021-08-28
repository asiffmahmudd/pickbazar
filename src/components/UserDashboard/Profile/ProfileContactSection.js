import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BiPlus } from "react-icons/bi";
import { callAddContact, deleteContactNumber, getAllContacts, updateContacts } from '../../../utils/network';
import AddContactModal from '../../Checkout/AddContactModal';
import Loading from '../../Loading/Loading';
import ProfileContactItem from './ProfileContactItem';

const ProfileContactSection = ({customer}) => {

    const [addContactIsOpen, setAddContactIsOpen] = useState(false);
    const [numbers, setNumbers] = useState([])
    const [loading, setLoading] = useState(false)

    // useEffect(()=> {
    //     setNumbers(customer?.contactNumber || [])
    // },[customer?.contactNumber])

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
                setLoading(false)
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
        //         authorization: `Bearer ৳{localStorage.getItem('token')}`
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
            <div className="contact profile-section">
                <h3 className="profile-header">Contact Numbers</h3>
                <div className="profile-section-add-btn" onClick={() => setAddContactIsOpen(true)}>
                    <BiPlus/> Add Number
                </div>
                <div className="row" id="deliveryAddress" name="deliveryAddress">
                    {
                        numbers?.map((number, index) => <ProfileContactItem key={index} number={number} updateNumbersInDatabase={updateNumbersInDatabase} numbers={numbers} index={index} setNumbers={setNumbers} handleDelete={handleDelete}></ProfileContactItem>)
                    }
                </div>
            </div>
            <AddContactModal addContact={addContact} addContactIsOpen={addContactIsOpen} handleClose={handleClose}></AddContactModal>
        </>
    );
};

export default ProfileContactSection;