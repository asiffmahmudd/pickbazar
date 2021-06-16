import React from 'react';
import './SignupModal.css';
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";
import SocialLogIn from '../SocialLogin/SocialLogIn';

const SignupModal = ({signupIsOpen, handleClose, handleLoginOpen}) => {
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
            isOpen={signupIsOpen}
            onRequestClose={handleClose}
            style={customStyles}
            className="login-modal"
        >
            <span className="modal-close hover-pointer" onClick={handleClose}>
                <GrClose></GrClose>
            </span>

            <div className="modal-container">
                <h4 className="theme-text text-center">Sign Up</h4>
                <p className="text-center">By signing up, you agree to Pickbazar's Terms</p>
                <form className="login">
                    <div className="form-group">
                        <input type="email" className="cstm-input" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="cstm-input" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn form-btn continue-btn bg-theme w-100">Continue</button>
                </form>
                
                <p className="terms">By signing up, you agree to Pickbazar's <span className="terms-link">Terms &amp; Condtions</span></p>
                
                <SocialLogIn></SocialLogIn>
                
                <p className="form-text modal-text text-center">Already have an account? <span className="theme-text underline" onClick={handleLoginOpen}>Login</span></p>
            </div>
        </Modal>
    );
};

export default SignupModal;