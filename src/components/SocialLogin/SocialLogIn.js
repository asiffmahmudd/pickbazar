import React from 'react';
import './SocialLogin.css';
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, useLocation } from 'react-router-dom';

const SocialLogIn = ({handleClose}) => {

    const {loginWith} = useAuth()
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleLogin = (media) => {
        loginWith(media)
        .then(data => {
            console.log("6")
            handleClose()
            history.push(from)
        })
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