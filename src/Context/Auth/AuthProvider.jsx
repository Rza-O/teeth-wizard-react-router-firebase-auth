import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }

    const manageProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    const handleLogOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogOut,
        manageProfile,
        user,
        setUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null);
            }
        })
    
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;