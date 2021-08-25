import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from "firebase/app";
import { auth } from '../utils/firbaseConfig';
import { useForceUpdate } from '../components/Admin/Pages/AdminProducts/AdminProducts';

const AuthContext = createContext();
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {    
    
    const forceUpdate = useForceUpdate()
    const [loggedInUser, setLoggedInUser] = useState();
    const [loading, setLoading] = useState(true);

    async function loginWith(media){
        let provider;
        if(media === 'google')
            provider = new firebase.auth.GoogleAuthProvider();
        else if(media === 'facebook')
            provider = new firebase.auth.FacebookAuthProvider();
        const data = await auth.signInWithPopup(provider).catch(e=> alert(e.message))
        if(data && data.additionalUserInfo.isNewUser){
            await saveUserData(data.user)
        }
        return data;
    }

    async function signUpWithEmail(userData){
        await auth.createUserWithEmailAndPassword(userData.email, userData.password).catch(e=>alert(e.message))
        var user = firebase.auth().currentUser;
        await saveUserData(user)
        return user
    }

    async function passwordReset(email){
        await auth.sendPasswordResetEmail(email)
        .then(() => {
            alert("An email has been sent to "+ email + " to reset your password. Please check your email")
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    async function verifyEmail(){
        await auth.currentUser.sendEmailVerification()
        .then(() => {
            alert("An email containing the verification link has been sent to your email. Please refresh the page after verification")
        })
        .catch(e => alert(e.message))
    }

    function signInWithEmail(user){
        let currentUser = {
            uid: user.userInfo.uid,
            name: user.userInfo.name,
            email: user.userInfo.email
        }
        setLoggedInUser(currentUser)
        localStorage.setItem('user', JSON.stringify(user))
    }

    function logout(){
        localStorage.removeItem('user')
        setLoggedInUser(null)
        forceUpdate()
    }

    function saveToken(){
        return firebase.auth().currentUser.getIdToken(true)
            .then(function(idToken) {
            return idToken;
        }).catch(function(error) {
            alert(error.message);
        });
    }

    const saveUserData = (user) =>{
        var dayjs = require('dayjs')
        var localizedFormat = require('dayjs/plugin/localizedFormat')
        dayjs.extend(localizedFormat)
        let currentUser = {
            uid: user.userInfo.uid,
            name: user.userInfo.name,
            email: user.userInfo.email,
            // photo: user.photoURL,
            joiningDate: dayjs().format('LL'),
            totalAmount: 0,
            orders: 0 
        }
        
        return fetch('https://pickbazar-clone.herokuapp.com/addCustomer/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(response => response.json())
        .then(data => {
            if(data){ 
            }
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
            alert(error.message)
        })
    }

    useEffect(() => {
        let currentUser;
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            currentUser = {
                uid: user.userInfo.uid,
                name: user.userInfo.name,
                email: user.userInfo.email,
            }
            setLoggedInUser(currentUser);
            setLoading(false);
        }
        else{
            setLoggedInUser(null)
        }
        setLoading(false);
    },[])

    const value = {
        loggedInUser,loginWith,logout, signInWithEmail, signUpWithEmail, saveToken, passwordReset, verifyEmail,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
