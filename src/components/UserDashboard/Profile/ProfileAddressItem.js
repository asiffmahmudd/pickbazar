import React from 'react';
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import AddAddressModal from '../../Checkout/AddAddressModal';

const ProfileAddressItem = ({address, updateAddressInDatabase, addresses, index, setAddresses, handleDelete}) => {

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
            updateAddressInDatabase(title,desc,index)
        }
    }
    return (
        <>
            <div key={index} className="col-md-4">
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
            </div>
            <AddAddressModal addressData={address} updateAddress={updateAddress} addAddressIsOpen={addAddressIsOpen} handleClose={handleClose}></AddAddressModal>
        </>
    );
};

export default ProfileAddressItem;