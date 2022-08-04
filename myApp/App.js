import React from 'react'
import { AuthProvider } from './src/components/context/AuthContext';
import { ProductProvider } from './src/components/context/ProductContext';
import Footer from './src/components/Footer/Footer'
import Header from './src/components/Header/Header'
import StackNavigator from './src/Navigation/StackNavigator';
import Login from './src/screens/Auth/Login';


export default function App() {
    return (
        <AuthProvider>
            <ProductProvider>
                <StackNavigator />
            </ProductProvider>
        </AuthProvider>

    )
}
