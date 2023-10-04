import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../FireBase/FireBase";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider;
const githubProvider = new GithubAuthProvider;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // google
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // github
    const githubLogIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // signUp with email and password
    const signUpWithEmail =(email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // forget password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    // signOut
    const signOutUser = () => {
        return signOut(auth)
    }
    // update PRofile
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo,
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            return () => {
                unSubscribe()
            }
        }) 
        
    },[])
    
    const authInfo = {
        googleLogIn,
        githubLogIn,
        user,
        signUpWithEmail,
        signInWithEmail,
        updateUser,
        forgetPassword,
        signOutUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;