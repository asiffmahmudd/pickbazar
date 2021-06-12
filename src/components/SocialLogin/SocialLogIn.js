import React from 'react';
import './SocialLogin.css';
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

const SocialLogIn = () => {
    return (
        <>
        <div className="cstm-separator">
            <span>or</span>
        </div>
        <button className="btn form-btn fb-btn"><FaFacebookSquare color="white" size={22} style={{marginRight:"5px"}}/> Continue With Facebook</button>
        <button className="btn form-btn google-btn"><FaGoogle color="white" size={22} style={{marginRight:"5px"}}/> Continue With Google</button>
        </>
    );
};

export default SocialLogIn;