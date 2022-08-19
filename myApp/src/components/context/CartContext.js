import React, { useEffect, useReducer, createContext, useContext, useState } from "react";
import { filter_reducer } from '../../reducer/CartReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

// const getData = async (dispatch) => {
//     console.log("dispatch", dispatch);
//     try {
//         const data = await AsyncStorage.getItem('cart');
//         if (data !== null) {
//             dispatch({ type: "SET_ITEM_CART", payload: JSON.parse(data) })
//             console.log("daga", JSON.parse(data));
//             // return data;
//         }
//     } catch (error) {
//         console.log(error);
//     }

// };

// let users = [
//     {
//         id: 1,
//         name: "usama"
//     },
//     {
//         id: 2,
//         name: "ali"
//     },
// ]
const initialState = {
    cart: [],
    total_items: 0,
    total_amount: 0,
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filter_reducer, initialState)
    console.log("cart", state.cart);
    const addToCart = (restaurantItem, amount) => {
        dispatch({ type: 'ADD_TO_CART', payload: { restaurantItem, amount } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }
    const cartclear = () => {
        dispatch({ type: "CART_CLEAR" })
    }
    const toggleAmount = (id, value) => {
        dispatch({
            type: "TOGGLE_CART_ITEM_AMOUNT",
            payload: {
                id,
                value,
            },
        })
    }



    // useEffect(() => {
    //     getData(dispatch)
    // }, [])

    // const setObjectValue = async () => {
    //     try {
    //         await AsyncStorage.setItem("cart", JSON.stringify(state.cart)) || [];
    //     } catch (e) {
    //         console.log(e);
    //     }

    // }

    useEffect(() => {
        // setObjectValue()
        dispatch({ type: 'COUNT_CART_TOTALS' })
    }, [state.cart])

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            removeItem,
            cartclear,
            toggleAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, CartContext }