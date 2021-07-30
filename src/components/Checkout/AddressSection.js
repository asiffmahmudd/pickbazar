import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiPlus } from "react-icons/bi";
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../Loading/Loading';
import AddAddressModal from './AddAddressModal';
import AddressItem from './AddressItem';

const AddressSection = ({register,errors, customer}) => {

    const [addAddressIsOpen, setAddAddressIsOpen] = useState(false);
    const [addresses, setAddresses] = useState([]) 
    const [loading, setLoading] = useState(false)
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
            <div className="address checkout-section">
                <h3 className="section-header">Delivery Address</h3>
                <div className="checkout-section-add-btn hover-pointer" onClick={() => setAddAddressIsOpen(true)}><BiPlus/> Add Address</div>
                <div className="radio-group row" id="deliveryAddress" name="deliveryAddress" {...register("deliveryAddress", { required:true })}>
                    
                    {
                        addresses?.map((address, index) => <AddressItem key={index} updateAddressInDatabase={updateAddressInDatabase} index={index} setAddresses={setAddresses} addresses={addresses} address={address} handleDelete={handleDelete}></AddressItem>)
                    }
                    
                </div>
                {errors.deliveryAddress?.type === 'required' && <span className="text-danger">Delivery address is required</span>}
            </div>
            <AddAddressModal addAddress={addAddress} addAddressIsOpen={addAddressIsOpen} handleClose={handleClose}></AddAddressModal>
            

        </>
    );
};

export default AddressSection;