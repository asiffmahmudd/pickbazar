import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiPlus } from "react-icons/bi";
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../Loading/Loading';
import AddAddressModal from './AddAddressModal';

const AddressSection = ({register,errors, customer}) => {

    const [addAddressIsOpen, setAddAddressIsOpen] = useState(false);
    const [addresses, setAddresses] = useState([])

    useEffect(()=> {
        setAddresses(customer?.deliveryAddress || [])
    },[customer?.deliveryAddress])
    
    const handleClose = () => {
        setAddAddressIsOpen(false)
    }
      
    const {loggedInUser} = useAuth()
    const [loading, setLoading] = useState(false)
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
            <div className="address checkout-section">
                <h3 className="section-header">Delivery Address</h3>
                <div className="checkout-section-add-btn hover-pointer" onClick={() => setAddAddressIsOpen(true)}><BiPlus/> Add Address</div>
                <div className="radio-group row" id="deliveryAddress" name="deliveryAddress" {...register("deliveryAddress", { required:true })}>
                    
                    {
                        addresses?.map((address, index) => {
                            return (
                                <label key={index} className="col-md-4">
                                    <input type="radio" name="deliveryAddress" className="card-input-element" value={address.desc}/>
                                    <div className="panel panel-default card-input">
                                        <div className="panel-heading">{address.title}</div>
                                        <div className="panel-body">
                                            {address.desc}
                                        </div>
                                    </div>
                                </label>
                            )
                        })
                    }
                    
                </div>
                {errors.deliveryAddress?.type === 'required' && <span className="text-danger">Delivery address is required</span>}
            </div>
            <AddAddressModal addAddress={addAddress} addAddressIsOpen={addAddressIsOpen} handleClose={handleClose}></AddAddressModal>
            

        </>
    );
};

export default AddressSection;