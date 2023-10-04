import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../FireBase/FireBase";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider;
const githubProvider = new GithubAuthProvider;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // google
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // github
    const githubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    // signUp with email and password
    const signUpWithEmail =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn
    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // forget password
    const forgetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }
    // signOut
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    // update PRofile
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo,
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
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
        signOutUser,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;