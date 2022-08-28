import React, { createContext, useContext, useState, useEffect } from "react";
import firestore from '@react-native-firebase/firestore';


const ProductContext = createContext()



export const ProductProvider = ({ children }) => {
    const [isloading, setIsloading] = useState(false)
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const allCategories = ['all', ...new Set(products.map((item) => {
        return (
            item.category
        )
    }))];



    console.log(allCategories);
    const fetchProducts = async () => {
        setIsloading(true)
        try {
            let array = []
            firestore()
                .collection('products')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        array.push({ ...doc.data(), id: doc.id })
                    });
                    setProducts(array)
                    setIsloading(false)
                }).catch(e => {
                    console.log(e);
                })
        } catch (error) {
            console.log(e);
        }
    }


    const filterItems = (category) => {
        if (category === 'all') {
            setFilterProducts(products);
            return;
        } else {
            const newItems = products.filter((item) => item.category === category);
            return setFilterProducts(newItems);
        }
    };

    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    useEffect(() => {
        fetchProducts()
    }, [])

    return <ProductContext.Provider value={{
        filterProducts,
        allCategories,
        filterItems,
        products,
        isloading,
        allCategories,

    }}>
        {children}
    </ProductContext.Provider>
}

export const useGlobalProducts = () => {
    return useContext(ProductContext)
}