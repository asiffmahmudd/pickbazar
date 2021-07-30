import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BiPlus } from "react-icons/bi";
import { useAuth } from '../../../contexts/AuthContext';
import AddContactModal from '../../Checkout/AddContactModal';
import Loading from '../../Loading/Loading';
import ProfileContactItem from './ProfileContactItem';

const ProfileContactSection = ({customer}) => {

    const [addContactIsOpen, setAddContactIsOpen] = useState(false);
    const [numbers, setNumbers] = useState([])
    const {loggedInUser} = useAuth()
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