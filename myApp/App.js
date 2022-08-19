import React from 'react'
import { AuthProvider } from './src/components/context/AuthContext';
import StackNavigator from './src/Navigation/StackNavigator';
import { LogBox } from 'react-native';
import { CartProvider } from './src/components/context/CartContext';
import { ProductProvider } from './src/components/context/ProductsContext';



export default function App() {
    LogBox.ignoreAllLogs()
    return (
        <AuthProvider>
            <ProductProvider>
                <CartProvider>
                    <StackNavigator />
                </CartProvider>
            </ProductProvider>
        </AuthProvider>

    )
}
