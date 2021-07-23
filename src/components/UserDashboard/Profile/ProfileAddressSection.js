import React from 'react';
import { useState } from 'react';
import AddAddressModal from '../../Checkout/AddAddressModal';
import { BiPlus } from "react-icons/bi";
import { useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import Loading from '../../Loading/Loading';

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
            setLoading(true)
            const newList = addresses
            newList.push({
                title,
                desc
            });
            setAddresses(newList)
            setAddAddressIsOpen(false)

            fetch('http://localhost:4000/updateCustomerAddress/'+loggedInUser.uid, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addresses)
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
            <div className="address profile-section">
                <h3 className="profile-header">Delivery Address</h3>
                <div className="profile-section-add-btn" onClick={() => setAddAddressIsOpen(true)}>
                    <BiPlus/> Add Address
                </div>
                <div className="row" id="deliveryAddress" name="deliveryAddress">
                    
                    {
                        addresses?.map((address, index) => {
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
            <AddAddressModal addAddress={addAddress} addAddressIsOpen={addAddressIsOpen} handleClose={handleClose}></AddAddressModal>
        </>
    );
};

export default ProfileAddressSection;