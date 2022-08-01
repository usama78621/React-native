import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="First">
                    {() => (
                        <SettingsStack.Navigator>
                            <SettingsStack.Screen
                                name="Home"
                                component={Home}
                            />
                            <SettingsStack.Screen name="Contact" component={Contact} />
                        </SettingsStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="Second">
                    {() => (
                        <Stack.Navigator>
                            <Stack.Screen name="Contact" component={Contact} />
                            <Stack.Screen name="About" component={About} />
                        </Stack.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}