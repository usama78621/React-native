import React from 'react'
import Footer from './src/components/Footer/Footer'
import Header from './src/components/Header/Header'
import StackNavigator from './src/Navigation/StackNavigator';
import TabNavigator from './src/Navigation/TabNavigator';
import Login from './src/screens/Auth/Login';


export default function App() {
    return (
        // <StackNavigator />
        <Login />
        // <TabNavigator />
    )
}
