import React, { useState, useEffect, useReducer, createContext, useContext } from "react";
import { categoryData } from '../../contant/Icon'
import { filter_reducer } from '../../reducer/ProductsReducer'

const ProductsContext = createContext();

const initialState = {
    products_loading: false,
    products_error: false,
    all_products: [],
    category: [],
}
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filter_reducer, initialState)

    return (
        <ProductsContext.Provider value={{
            ...state
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

export { ProductProvider, ProductsContext }