import React from 'react';
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, useLocation} from "react-router-dom";

const UserSocialLogin = () => {

    const {loginWith, saveToken} = useAuth();
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    async function handleLogin(media) {
        await loginWith(media)
        try{
            saveToken()
            .then(idToken => {
                localStorage.setItem('token', idToken)
                history.replace(from)
            })
        }
        catch(e){
            alert("Something went wrong")
        }
    }

    return (
        <>
            <div className="cstm-separator">
                <span>or</span>
            </div>
            <button className="btn form-btn fb-btn" onClick={()=>handleLogin('facebook')}>
                <FaFacebookSquare color="white" size={22} style={{marginRight:"5px"}}/> Continue With Facebook
            </button>
            <button className="btn form-btn google-btn" onClick={()=>handleLogin('google')}>
                <FaGoogle color="white" size={22} style={{marginRight:"5px"}}/> Continue With Google
            </button>
        </>
    );
};

export default UserSocialLogin;