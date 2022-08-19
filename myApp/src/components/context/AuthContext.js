import React, { useState, useEffect, createContext, useContext } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Authcontext = createContext();

const AuthProvider = ({ children }) => {
    const [Authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [userRole, setUserRole] = useState("")
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    await firestore().collection('users').doc(user.uid).get()
                        .then((userInfo) => {
                            setUserRole(userInfo.data());
                        }).catch(e => {
                            console.error(e)
                        })
                } catch (error) {
                    console.log(error);
                }
                setUser(user)
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
                setUser({})
            }
        })
        return subscriber;
    }, []);
    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => alert('User signed out!')).catch((e) => alert("error", e))

    }
    return <Authcontext.Provider value={{
        user,
        Authenticated,
        handleLogout,
        userRole
    }}>
        {children}
    </Authcontext.Provider>
}

export const useAuthContext = () => {
    return useContext(Authcontext)
}

export { AuthProvider, Authcontext }