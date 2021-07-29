import {Link, useHistory, useLocation} from "react-router-dom";
import React, { useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading'
import SimpleHeader from "../SimpleHeader/SimpleHeader";
const Reset = () => {

    const {passwordReset} = useAuth()
    const { register, handleSubmit, reset } = useForm()
    const [loading, setLoading] = useState(false)
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = async data => {
        try{
            setLoading(true)
            await passwordReset(data.email)
            .then(() => {
                setLoading(false)
                reset()
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
                            <h4 className="theme-text text-center">Forgot Password</h4>
                            <p className="text-center">We'll send you a link to reset your password</p>
                            <form className="reset" onSubmit={handleSubmit(onSubmit)}>
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