import {Link} from "react-router-dom";
import React from 'react';
import Header from '../Header/Header';
import UserSocialLogin from "../UserSocialLogin/UserSocialLogin";

const SignUp = () => {

    return (
        <>
            <Header></Header>
            <div className="pt-5 pb-5 mt-5">
                <div className="signup-container container mt-5">
                    <div className="row">
                        <div className="col-lg-5 mx-auto bg-white p-md-5 pt-4 pb-4 rounded">
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
                            
                            <UserSocialLogin></UserSocialLogin>
                            
                            <p className="form-text modal-text text-center">Already have an account? <Link className="theme-text underline" to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default SignUp;