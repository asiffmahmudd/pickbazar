import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from "firebase/app";
import { auth } from '../utils/firbaseConfig';
import { serverUrl } from '../baseURL';

const AuthContext = createContext();
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {    
    
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
        return auth.signInWithEmailAndPassword(user.email, user.password).catch(e=>alert(e.message))
    }

    function logout(){
        return auth.signOut();
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
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            joiningDate: dayjs().format('LL'),
            totalAmount: 0,
            orders: 0 
        }
        
        return fetch(serverUrl + '/addCustomer/', {
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
        const unsubscribe = auth.onAuthStateChanged(user => {
            let currentUser;
            if(user){
                saveToken()
                .then(idToken => {
                    localStorage.setItem('token', idToken)
                })
                currentUser = {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    emailVerified: user.emailVerified,
                    providerId: user.providerData[0].providerId,
                }
            }
            setLoggedInUser(currentUser);
            setLoading(false);
        })

        return unsubscribe;
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
