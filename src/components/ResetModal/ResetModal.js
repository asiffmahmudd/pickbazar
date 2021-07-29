import React from 'react';
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";
import { useAuth } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';

const ResetModal = ({resetIsOpen, handleClose, handleLoginOpen}) => {
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

    const {passwordReset} = useAuth()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async data => {
        try{
            await passwordReset(data.email)
            .then(() => {
                reset()
                handleClose()
            })
        }
        catch(e){
            alert(e.message)
        }
    };

    return (
        <Modal
            isOpen={resetIsOpen}
            onRequestClose={handleClose}
            style={customStyles}
            className="login-modal"
        >
            <span className="modal-close hover-pointer" onClick={handleClose}>
                <GrClose></GrClose>
            </span>

            <div className="modal-container">
                <h4 className="theme-text text-center">Forgot Password</h4>
                <p className="text-center">We'll send you a link to reset your password</p>
                <form className="reset" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="email" 
                            className="cstm-input" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            {...register("email")}
                            placeholder="Enter email" 
                            required
                        />
                    </div>
                    <button type="submit" className="btn form-btn continue-btn bg-theme w-100">Continue</button>
                </form>
                
                <p className="form-text modal-text text-center">Back to <span className="theme-text underline" onClick={handleLoginOpen}>Login</span></p>
                
            </div>
        </Modal>
    );
};

export default ResetModal;