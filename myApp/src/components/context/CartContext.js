import React, { useEffect, useReducer, createContext, useContext, useState } from "react";
import { filter_reducer } from '../../reducer/CartReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

const getData = async () => {
    const data = await AsyncStorage.getItem('cart');
    if (data !== null) {
        let newdata = JSON.parse(data)
        console.log('sdjf', newdata);
        return newdata;
    } else {
        return []
    }
}

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

    const setObjectValue = async () => {
        await AsyncStorage.setItem("cart", JSON.stringify(cartItem))
    }

    useEffect(() => {
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