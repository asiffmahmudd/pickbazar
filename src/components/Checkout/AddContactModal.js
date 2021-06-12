import React from 'react';
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";

const AddContactModal = ({addContact, addContactIsOpen, handleClose}) =>{

    

    const customStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          overflow: 'visible',
          transform: 'translate(-50%, -50%)',
          padding: 0,
        },
        overlay:{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        
      };


    return (
        <Modal
            isOpen={addContactIsOpen}
            onRequestClose={handleClose}
            style={customStyles}
            ariaHideApp={false}
        >
            <span className="modal-close hover-pointer" onClick={handleClose}>
                <GrClose></GrClose>
            </span>

            <div className="modal-container">
                <h4 className="">Add New Number</h4>
                <form className="add-number pb-3">
                    <div className="form-group">
                        <input type="text" className="cstm-input" id="number-title" aria-describedby="numberTitle" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="cstm-input" id="number" placeholder="Enter Number" />
                    </div>
                    <div onClick={addContact} className="btn form-btn continue-btn bg-theme w-100">Save Contact</div>
                </form>
                
            </div>
        </Modal>
    );
};

export default AddContactModal;