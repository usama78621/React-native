import React from 'react'
import { AuthProvider } from './src/components/context/AuthContext';
import StackNavigator from './src/Navigation/StackNavigator';
import { LogBox } from 'react-native';
import { CartProvider } from './src/components/context/CartContext';
import { ProductProvider } from './src/components/context/ProductsContext';
import { StripeProvider } from '@stripe/stripe-react-native';



const App = () => {
    LogBox.ignoreAllLogs()
    return (
        <StripeProvider publishableKey="pk_test_51LWjOiK0ur0T93qVUwCRFhJ0oJYY5Vj8B8yZW4yGFyqUiTc0E50kTb5MjnaKfrOmQrmy7b6TKnM1SjFZ1WsoXKyA00N7o2Hr2x"
            merchantIdentifier="merchant.identifier"
        >
            <AuthProvider>
                <ProductProvider>
                    <CartProvider>
                        <StackNavigator />
                    </CartProvider>
                </ProductProvider>
            </AuthProvider>
        </StripeProvider>

    )
}

export default App