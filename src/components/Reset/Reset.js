import {Link} from "react-router-dom";
import React from 'react';
import Header from '../Header/Header';
const Reset = () => {
    return (
        <>
            <Header></Header>
            <div className="pt-5 pb-5 mt-5">
                <div className="login-container container mt-5">
                    <div className="row">
                        <div className="col-lg-5 mx-auto bg-white p-md-5 pt-4 pb-4">
                            <h4 className="theme-text text-center">Forgot Password</h4>
                            <p className="text-center">We'll send you a link to reset your password</p>
                            <form className="reset">
                                <div className="form-group">
                                    <input type="email" className="cstm-input" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <button type="submit" className="btn form-btn continue-btn bg-theme w-100">Continue</button>
                            </form>
                            
                            <p className="form-text modal-text text-center">Back to <Link to="/login" className="theme-text underline">Login</Link></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Reset;