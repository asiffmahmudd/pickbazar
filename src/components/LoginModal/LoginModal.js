import React from 'react';
import Modal from 'react-modal';
import './LoginModal.css';
import { GrClose } from "react-icons/gr";
import SocialLogIn from '../SocialLogin/SocialLogIn';


const LoginModal = ({loginIsOpen, handleClose, handleSignupOpen, handleResetOpen}) => {

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
            isOpen={loginIsOpen}
            onRequestClose={handleClose}
            style={customStyles}
            className={"login-modal"}
        >
            <span className="modal-close hover-pointer" onClick={handleClose}>
                <GrClose></GrClose>
            </span>

            <div className="modal-container">
                <h4 className="theme-text text-center">Welcome Back</h4>
                <p className="text-center">Login with your email and password</p>
                <form className="login">
                    <div className="form-group">
                        <input type="email" className="cstm-input" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="cstm-input" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn form-btn continue-btn bg-theme w-100">Continue</button>
                </form>
                
                <SocialLogIn></SocialLogIn>
                
                <p className="form-text modal-text text-center">Don't have any account? <span className="theme-text underline" onClick={handleSignupOpen}>Sign Up</span></p>
            
                
            </div>
            <div className="forgot-password">
                <p className="form-text text-center">Forgot your password? <span className="theme-text underline" onClick={handleResetOpen}>Reset It</span></p>
            </div>
        </Modal>
    );
};

export default LoginModal;