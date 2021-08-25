import React, { useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import AddContactModal from './AddContactModal';

const ContactItem = ({number, updateNumbersInDatabase, numbers, index, setNumbers, handleDelete}) => {

    const [addContactIsOpen, setAddContactIsOpen] = useState(false)
    
    const handleEdit = () =>{
        setAddContactIsOpen(true)
    }
    const handleClose = () => {
        setAddContactIsOpen(false)
    }

    const updateNumber = () => {
        let title = document.getElementById("number-title").value;
        let desc = document.getElementById("number").value;

        if(!title || !desc){
            alert("Please fill out all inputs")
        }
        else{
            const newList = [...numbers]
            newList[index].title = title
            newList[index].desc = desc
            setNumbers(newList)
            handleClose()
            updateNumbersInDatabase(newList)
        }
    }

    return (
        <>
            <label key={index} className="col-md-4">
                <input type="radio" name="contactNumber" className="card-input-element" value={number.desc}/>
                <div className="panel panel-default card-input">
                    <span className="hover-item-action-container d-flex">
                        <span className="hover-edit mr-1" onClick={()=>handleEdit(number)}>
                            <FiEdit2 size={12} color="white"/>
                        </span>
                        <span className="hover-delete" onClick={()=>handleDelete(index)}>
                            <AiOutlineClose size={12} color="white"/>
                        </span>
                    </span>
                    <div className="panel-heading">{number.title}</div>
                    <div className="panel-body">
                    {number.desc}
                    </div>
                </div>
            </label>
            <AddContactModal numberData={number} updateNumber={updateNumber} addContactIsOpen={addContactIsOpen} handleClose={handleClose}></AddContactModal>
        </>
    );
};

export default ContactItem;