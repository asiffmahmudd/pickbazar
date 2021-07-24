import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from "firebase/app";
import { auth } from '../utils/firbaseConfig';

const AuthContext = createContext();
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {    
    
    const [loggedInUser, setLoggedInUser] = useState();
    const [loading, setLoading] = useState(true);

    async function loginWith(media){
        let provider;
        // setLoading(true)
        if(media === 'google')
            provider = new firebase.auth.GoogleAuthProvider();
        else if(media === 'facebook')
            provider = new firebase.auth.FacebookAuthProvider();
        const data = await auth.signInWithPopup(provider)
        if(data.additionalUserInfo.isNewUser){
            await saveUserData(data.user)
        }
        else{
            setLoading(false)
        }
        return data;
    }

    async function signUpWithEmail(userData){
        await auth.createUserWithEmailAndPassword(userData.email, userData.password)
        var user = firebase.auth().currentUser;
        await user.updateProfile({
            displayName: userData.name
        })
        
        auth.onAuthStateChanged(user => {
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
                    photo: user.photoURL
                }
            }
            setLoggedInUser(currentUser);
            setLoading(false);
        })
    }

    function signInWithEmail(user){
        return auth.signInWithEmailAndPassword(user.email, user.password);
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
        console.log(currentUser)
        return fetch('http://localhost:4000/addCustomer/', {
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
                    photo: user.photoURL
                }
            }
            setLoggedInUser(currentUser);
            setLoading(false);
        })

        return unsubscribe;
    },[])

    const value = {
        loggedInUser,loginWith,logout, signInWithEmail, signUpWithEmail, saveToken
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
