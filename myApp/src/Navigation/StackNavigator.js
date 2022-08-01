import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen name="register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}