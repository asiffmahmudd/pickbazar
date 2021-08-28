import React from 'react';
import { useState } from 'react';
import AddAddressModal from '../../Checkout/AddAddressModal';
import { BiPlus } from "react-icons/bi";
import { useEffect } from 'react';
import Loading from '../../Loading/Loading';
import ProfileAddressItem from './ProfileAddressItem';
import { callAddAddress, deleteDeliveryAddress, getDeliveryAddress, updateDeliveryAddress } from '../../../utils/network';

const ProfileAddressSection = ({customer}) => {

    const [addAddressIsOpen, setAddAddressIsOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [addresses, setAddresses] = useState([])
    // const {loggedInUser} = useAuth()

    // useEffect(()=> {
    //     setAddresses(customer?.deliveryAddress || [])
    // },[customer?.deliveryAddress])

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
            const address = {title, desc}
            
            setLoading(true)
            const user = JSON.parse(localStorage.getItem('user')) 
            callAddAddress(address, user.token)
            .then(result => {
                setLoading(false)
            })
        }
    }

    const updateAddressInDatabase = (title, desc, index) => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        const address = {
            title, desc
        }
        updateDeliveryAddress(address, addresses[index].id, user.token)
        .then(result => {
            setLoading(false)
        })
        
        // fetch('https://pickbazar-clone.herokuapp.com/updateCustomerAddress/'+loggedInUser.uid, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             authorization: `Bearer ৳{localStorage.getItem('token')}`
        //         },
        //         body: JSON.stringify(newList)
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         if(data){
                    
        //         }
        //         setLoading(false)
        //     })
        //     .catch(error => {
        //         setLoading(false)
        //         alert(error.message)
        //     })
    }

    const deleteAddress = (index) => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        deleteDeliveryAddress(addresses[index].id, user.token)
        .then(result => {
            setLoading(false)
        })
        // fetch('https://api.onimamzad.com/api/frontEnd/deleteAddress'+ addresses[index].id, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: user.token
        //     }
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
    
    const handleDelete = (index) =>{
        const newList = [...addresses]
        newList.splice(index,1)
        setAddresses(newList)
        deleteAddress(index)
    }

    useEffect(() => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        getDeliveryAddress(user.token)
        .then(result => {
            setLoading(false)
            setAddresses(result)
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