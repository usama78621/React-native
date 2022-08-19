import React, { createContext, useReducer, useContext } from "react";
import reducer from '../../reducer/ProductsReducer'
import firestore from '@react-native-firebase/firestore';
import { useAuthContext } from "./AuthContext";


const ProductContext = createContext()

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
    user_role_loading: false,
    user_role_error: false,
    user_role: {},
}

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { user } = useAuthContext()

    const fetchProducts = async () => {
        dispatch({ type: 'GET_PRODUCTS_BEGIN' })
        try {
            let array = []
            firestore()
                .collection('products')
                .get()
                .then(querySnapshot => {
                    // console.log('Total users: ', querySnapshot.size);
                    querySnapshot.forEach(doc => {
                        array.push({ ...doc.data(), id: doc.id })
                        dispatch({ type: "ALL_PRODUCTS", payload: array })
                    });
                }).catch(e => {
                    console.log(e);
                })
        } catch (error) {
            dispatch({ type: 'GET_PRODUCT_ERROR' })
        }
    }

    const fetchUser = async () => {
        dispatch({ type: "GET_USER_BEGIN" })
        try {
            await firestore().collection('users').doc(user.uid).get()
                .then((userInfo) => {
                    // console.log(userInfo.data());
                }).catch(e => {
                    console.error(e)
                })
            dispatch({ type: "USER_INFO", payload: userInfo })
        } catch (error) {
            dispatch({ type: "GET_USER_INFO_ERROR" })
        }
    }


    React.useEffect(() => {
        fetchUser()
        fetchProducts()
    }, [])
    return <ProductContext.Provider value={{
        ...state,
        dispatch

    }}>
        {children}
    </ProductContext.Provider>
}

export const useGlobalProducts = () => {
    return useContext(ProductContext)
}