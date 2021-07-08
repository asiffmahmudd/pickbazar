import React from 'react';
import './SocialLogin.css';
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useAuth } from '../../contexts/AuthContext';

const SocialLogIn = ({handleClose}) => {

    const {loginWith} = useAuth()
    
    const handleLogin = (media) => {
        console.log(media)
        loginWith(media)
        .then(data => handleClose())
    }

    return (
        <>
        <div className="cstm-separator">
            <span>or</span>
        </div>
        <button className="btn form-btn fb-btn"><FaFacebookSquare color="white" size={22} style={{marginRight:"5px"}}/> Continue With Facebook</button>
        <button className="btn form-btn google-btn" onClick={()=>handleLogin('google')}>
            <FaGoogle color="white" size={22} style={{marginRight:"5px"}}/> Continue With Google
        </button>
        </>
    );
};

export default SocialLogIn;