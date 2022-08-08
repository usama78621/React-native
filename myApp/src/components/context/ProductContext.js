import React, { useState, useEffect, useReducer, createContext, useContext } from "react";
import { categoryData } from '../../contant/Icon'
import { filter_reducer } from '../../reducer/ProductsReducer'

const ProductsContext = createContext();

const initialState = {
    cart: [],
    total: 0,
    quantity: 0,
}
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filter_reducer, initialState)
    const addToCart = (restaurant) => {
        dispatch({ type: 'ADD_TO_CART', payload: restaurant })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }
    const cartclear = () => {
        dispatch({ type: "CART_CLEAR" })
    }
    const decrease = (id) => {
        dispatch({ type: "DESCEASE", payload: id })
    }
    const increase = (id) => {
        dispatch({ type: "INCREASE", payload: id })
    }
    return (
        <ProductsContext.Provider value={{
            ...state,
            addToCart,
            removeItem,
            cartclear,
            decrease,
            increase
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

export { ProductProvider, ProductsContext }