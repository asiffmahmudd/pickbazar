import {Link, useHistory, useLocation} from "react-router-dom";
import React from 'react';
import SimpleHeader from "../SimpleHeader/SimpleHeader";
import UserSocialLogin from "../UserSocialLogin/UserSocialLogin";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { useState } from "react";
import { signup } from "../../utils/network";

const SignUp = () => {

    const {signInWithEmail} = useAuth()
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = async data => {
        try{
            setLoading(true)
            signup(data)
            .then(result => {
                setLoading(false)
                signInWithEmail(result)
                history.replace(from)
            })
            // fetch('https://api.onimamzad.com/api/frontEnd/userRegister', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // })
            // .then(res => res.json())
            // .then(result => {
            //     setLoading(false)
            //     signInWithEmail(result)
            //     history.replace(from)
            // })
        }
        catch(e){
            setLoading(false)
            alert(e.message)
        }
    };

    return (
        <>
            <SimpleHeader></SimpleHeader>
            <Loading loading={loading}></Loading>
            <div className="pt-5 pb-5 mt-5">
                <div className="signup-container container mt-5">
                    <div className="row">
                        <div className="col-lg-5 mx-auto bg-white p-md-5 pt-4 pb-4 rounded">
                            <h4 className="theme-text text-center">Sign Up</h4>
                            <p className="text-center">By signing up, you agree to Pickbazar's Terms</p>
                            <form className="login" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="cstm-input" 
                                        id="name" 
                                        aria-describedby="name" 
                                        {...register("name")}
                                        placeholder="Enter name" 
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className="cstm-input" 
                                        id="email" 
                                        aria-describedby="emailHelp" 
                                        {...register("email")}
                                        placeholder="Enter email" 
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="cstm-input" 
                                        id="password" 
                                        {...register("password")}
                                        placeholder="Password"
                                        required
                                    />
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