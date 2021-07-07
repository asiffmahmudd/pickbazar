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

    function loginWith(media){
        let provider;
        if(media === 'google')
            provider = new firebase.auth.GoogleAuthProvider();
        else if(media === 'facebook')
            provider = new firebase.auth.FacebookAuthProvider();
        return auth.signInWithPopup(provider)
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
                currentUser = {
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

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            let currentUser;
            if(user){
                saveToken()
                .then(idToken => {
                    localStorage.setItem('token', idToken)
                })
                currentUser = {
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
