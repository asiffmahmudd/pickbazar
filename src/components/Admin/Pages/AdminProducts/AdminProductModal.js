import React from 'react';
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";
import './AdminProductModal.css';

const AdminProductModal = ({product, isOpen, handleClose}) => {

    const customStyles = {
        content : {
            top: '0px',
            right: '0px',
            left:'auto',
            overflow: 'visible',
            height: '100%',
            padding: '0',
            width: '80%',
        },
        overlay:{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            style={customStyles}
            ariaHideApp={false}
            className="product-modal"
        >
            <span className="modal-close hover-pointer" onClick={handleClose}>
                <GrClose></GrClose>
            </span>

            <div className="modal-container">
                <h4 className="">Add New Product</h4>
                
                
            </div>
        </Modal>
    );
};

export default AdminProductModal;