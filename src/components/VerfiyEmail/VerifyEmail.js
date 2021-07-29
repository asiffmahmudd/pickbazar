import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../Header/Header';
import './VerifyEmail.css'

const VerifyEmail = () => {

    const {verifyEmail} = useAuth()

    const handleClick = () => {
        try{
            verifyEmail()
        }
        catch(e){
            alert(e.message)
        }
    }

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row" style={{marginTop: '150px'}}>
                    <div className="col-md-5 mx-auto p-5 bg-white">
                        <h5 className="text-center">Your account is not verified. Please verify your account</h5>
                        <button className="btn verify-btn w-100 mt-4" onClick={handleClick}>Send Verfication Mail</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyEmail;