import React from 'react';
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import AddAddressModal from './AddAddressModal';

const AddressItem = ({address, updateAddressInDatabase, addresses, index, setAddresses, handleDelete}) => {
    const [addAddressIsOpen, setAddAddressIsOpen] = useState(false);
    
    const handleEdit = () =>{
        setAddAddressIsOpen(true)
    }
    const handleClose = () => {
        setAddAddressIsOpen(false)
    }

    const updateAddress = () => {
        let title = document.getElementById("address-title").value;
        let desc = document.getElementById("address").value;
        if(!title || !desc){
            alert("Please fill out all inputs")
        }
        else{
            const newList = [...addresses]
            newList[index].title = title
            newList[index].desc = desc
            setAddresses(newList)
            handleClose()
            updateAddressInDatabase(newList)
        }
    }

    return (
        <>
            <label className="col-md-4">
                <input type="radio" name="deliveryAddress" className="card-input-element" value={address.desc}/>
                
                <div className="panel panel-default card-input">
                    <span className="hover-item-action-container d-flex">
                        <span className="hover-edit mr-1" onClick={()=>handleEdit(address)}>
                            <FiEdit2 size={12} color="white"/>
                        </span>
                        <span className="hover-delete" onClick={()=>handleDelete(index)}>
                            <AiOutlineClose size={12} color="white"/>
                        </span>
                    </span>
                    <div className="panel-heading">{address.title}</div>
                    <div className="panel-body">
                        {address.desc}
                    </div>
                </div>
            </label>
            <AddAddressModal addressData={address} updateAddress={updateAddress} addAddressIsOpen={addAddressIsOpen} handleClose={handleClose}></AddAddressModal>
        </>
    );
};

export default AddressItem;