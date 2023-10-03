import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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
    const signOutUser = () => {
        return signOut(auth)
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
        signOutUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;