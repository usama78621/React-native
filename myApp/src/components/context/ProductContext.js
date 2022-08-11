import React, { useState, useEffect, useReducer, createContext, useContext } from "react";
import { filter_reducer } from '../../reducer/ProductsReducer'

const ProductsContext = createContext();

const initialState = {
    cart: [],
    total: 0,
    quantity: 0,
}
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filter_reducer, initialState)
    const addToCart = (restaurant, amount) => {
        dispatch({ type: 'ADD_TO_CART', payload: { restaurant, amount } })
    }
    console.log(state.cart);
    console.log(state.total);
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
    useEffect(() => {
        dispatch({ type: 'COUNT_CART_TOTALS' })
    }, [state.cart])
    return (
        <ProductsContext.Provider value={{
            ...state,
            addToCart,
            removeItem,
            cartclear,
            toggleAmount
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

export { ProductProvider, ProductsContext }