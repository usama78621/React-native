import React from 'react'
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Frontend/Home';
import Contact from '../screens/Frontend/Contact';
import About from '../screens/Frontend/About';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="First">
                    {() => (
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Home"
                                component={Home}
                            />
                            <Stack.Screen name="Contact" component={Contact} />
                        </Stack.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator