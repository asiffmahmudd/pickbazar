import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BiPlus } from "react-icons/bi";
import { useAuth } from '../../../contexts/AuthContext';
import AddContactModal from '../../Checkout/AddContactModal';
import Loading from '../../Loading/Loading';

const ProfileContactSection = ({customer}) => {

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