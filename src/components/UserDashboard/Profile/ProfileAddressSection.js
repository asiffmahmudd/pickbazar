import React from 'react';
import { useState } from 'react';
import AddAddressModal from '../../Checkout/AddAddressModal';
import { BiPlus } from "react-icons/bi";
import { useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import Loading from '../../Loading/Loading';
import ProfileAddressItem from './ProfileAddressItem';

const ProfileAddressSection = ({customer}) => {

    const [addAddressIsOpen, setAddAddressIsOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [addresses, setAddresses] = useState([])
    const {loggedInUser} = useAuth()

    useEffect(()=> {
        setAddresses(customer?.deliveryAddress || [])
    },[customer?.deliveryAddress])

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
            const newList = addresses
            newList.push({
                title,
                desc
            });
            setAddresses(newList)
            setAddAddressIsOpen(false)
            updateAddressInDatabase(newList)
        }
    }

    const updateAddressInDatabase = (newList) => {
        setLoading(true)
        fetch('http://localhost:4000/updateCustomerAddress/'+loggedInUser.uid, {
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
        const newList = [...addresses]
        newList.splice(index,1)
        setAddresses(newList)
        updateAddressInDatabase(newList)
    }

    return (
        <>
            <Loading loading={loading}></Loading>
            <div className="address profile-section">
                <h3 className="profile-header">Delivery Address</h3>
                <div className="profile-section-add-btn" onClick={() => setAddAddressIsOpen(true)}>
                    <BiPlus/> Add Address
                </div>
                <div className="row" id="deliveryAddress" name="deliveryAddress">
                    {
                        addresses?.map((address, index) => <ProfileAddressItem key={index} updateAddressInDatabase={updateAddressInDatabase} index={index} setAddresses={setAddresses} addresses={addresses} address={address} handleDelete={handleDelete}></ProfileAddressItem>)
                    }
                </div>
            </div>
            <AddAddressModal addAddress={addAddress} addAddressIsOpen={addAddressIsOpen} handleClose={handleClose}></AddAddressModal>
        </>
    );
};

export default ProfileAddressSection;