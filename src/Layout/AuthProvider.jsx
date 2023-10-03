import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../FireBase/FireBase";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider;


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
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
        user
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;