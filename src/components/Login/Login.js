import React from 'react';
import './Login.css'
import {Link, useHistory, useLocation} from "react-router-dom";
import UserSocialLogin from '../UserSocialLogin/UserSocialLogin';
import { useAuth } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import SimpleHeader from '../SimpleHeader/SimpleHeader';

const Login = () => {

    const {signInWithEmail, saveToken} = useAuth()
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = async data => {
        try{
            setLoading(true)
            await signInWithEmail(data)
            saveToken()
            .then(idToken => {
                localStorage.setItem('token', idToken);
                setLoading(false)
                history.replace(from)
            })
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
                <div className="login-container container mt-5">
                    <div className="row">
                        <div className="col-lg-5 mx-auto bg-white p-md-5 pt-4 pb-4">
                            <h4 className="theme-text text-center">Welcome Back</h4>
                            <p className="text-center">Login with your email and password</p>
                            <form className="login" onSubmit={handleSubmit(onSubmit)}>
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