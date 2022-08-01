import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import auth from '@react-native-firebase/auth';

const Authcontext = createContext();

const AuthProvider = ({ children }) => {
    const [Authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user)
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
            }
        })

    }, []);
    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => alert('User signed out!')).catch((e) => alert("error", e))

    }
    return <Authcontext.Provider value={{
        user,
        Authenticated,
        handleLogout
    }}>
        {children}
    </Authcontext.Provider>
}

export const useAuthContext = () => {
    return useContext(Authcontext)
}

export { AuthProvider, Authcontext }