import React from 'react';
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";

const AddAddressModal = ({addAddress, addAddressIsOpen, handleClose}) =>{

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
            isOpen={addAddressIsOpen}
            onRequestClose={handleClose}
            style={customStyles}
            ariaHideApp={false}
        >
            <span className="modal-close hover-pointer" onClick={handleClose}>
                <GrClose></GrClose>
            </span>

            <div className="modal-container">
                <h4 className="">Add New Address</h4>
                <form className="add-number pb-3">
                    <div className="form-group">
                        <input type="text" className="cstm-input" id="address-title" aria-describedby="addressTitle" placeholder="Enter Title"/>
                    </div>
                    <div className="form-group">
                        <textarea style={{minHeight: '150px'}} type="textarea" className="cstm-input" id="address" placeholder="Enter Address"  />
                    </div>
                    <div onClick={addAddress} className="btn form-btn continue-btn bg-theme w-100">Save Address</div>
                </form>
                
            </div>
        </Modal>
    );
};

export default AddAddressModal;