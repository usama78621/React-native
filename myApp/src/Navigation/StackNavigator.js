import * as React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import { useAuthContext } from '../components/context/AuthContext';
import Contact from '../screens/Frontend/Contact'
import TabNavigation from './TabNavigation';
import SingleProduct from '../screens/Frontend/SingleProduct';
import AdminHome from '../admin/AdminHome';
import MyCart from '../screens/Frontend/Cart';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View, Button, TouchableOpacity } from "react-native";
import { navigationRef } from '../screens/Frontend/RootNavigation'
import Maps from '../screens/Frontend/Maps';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    const { Authenticated, handleLogout } = useAuthContext()

    function LogoTitle() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <View
                    style={{
                        width: '50%',
                        height: "100%",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25
                        // <Button title='lOGOUT' onPress={handleLogout} />
                    }}
                >
                    <Text style={{ fontSize: 20 }}>Location</Text>
                </View>
            </View>
        );
    }
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator>
                {!Authenticated
                    ? (
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen
                                name="Login"
                                component={Login}
                            />
                            <Stack.Screen name="register" component={Register} />
                        </Stack.Group>
                    ) : (
                        <>
                            <Stack.Group>
                                <Stack.Screen
                                    options={{
                                        headerRight: () => (
                                            <TouchableOpacity
                                                onPress={() => navigationRef.navigate('cart')}
                                            >
                                                <MaterialIcons
                                                    name='shopping-basket'
                                                    size={40}
                                                />
                                            </TouchableOpacity>
                                        ),
                                        headerTitle: (props) => <LogoTitle {...props} />,

                                        headerLeft: () => (
                                            <TouchableOpacity
                                                onPress={() => navigationRef.navigate('map')}
                                            >
                                                <MaterialIcons
                                                    name='location-pin'
                                                    size={40}
                                                />
                                            </TouchableOpacity>
                                        ),
                                    }}
                                    name="Tab"
                                    component={TabNavigation}
                                />
                                <Stack.Screen name="Contact" component={Contact} />
                                <Stack.Screen name="Restaurant" component={SingleProduct} />
                                <Stack.Screen name="admin" component={AdminHome} />
                                <Stack.Screen name="cart" component={MyCart} />
                                <Stack.Screen name="map" component={Maps} />
                            </Stack.Group>
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer >
    )
}