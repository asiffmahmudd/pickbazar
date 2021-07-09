import React from 'react';
import './Login.css'
import Header from '../Header/Header'
import {Link} from "react-router-dom";
import UserSocialLogin from '../UserSocialLogin/UserSocialLogin';

const Login = () => {

    return (
        <>
            <Header></Header>
            <div className="pt-5 pb-5 mt-5">
                <div className="login-container container mt-5">
                    <div className="row">
                        <div className="col-lg-5 mx-auto bg-white p-md-5 pt-4 pb-4">
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
                            
                            <UserSocialLogin></UserSocialLogin>
                            
                            <p className="form-text modal-text text-center">Don't have any account? <Link className="theme-text underline" to="/signup">Sign Up</Link></p>
                            <div className="forgot-password">
                                <p className="form-text text-center">Forgot your password? <Link to="/reset" className="theme-text underline" >Reset It</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Login;