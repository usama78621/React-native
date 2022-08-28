import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Home from '../screens/Frontend/Home';
import Svg, { Path } from 'react-native-svg'
import { TouchableOpacity, View, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Addproducts from '../screens/Dashboard/Addproducts';
import Contact from '../screens/Frontend/Contact';
import HomeMian from '../screens/Frontend/HomeMian';
import { navigationRef } from '../screens/Frontend/RootNavigation'
import Profile from '../screens/Frontend/Profle';
import { useAuthContext } from '../components/context/AuthContext';
import Like from '../screens/Like';

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
    const { Authenticated } = useAuthContext()
    // function LogoTitle() {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
    //             <View
    //                 style={{
    //                     width: '50%',
    //                     height: "100%",
    //                     backgroundColor: '#eee',
    //                     alignItems: 'center',
    //                     justifyContent: 'center',
    //                     borderRadius: 25
    //                     // <Button title='lOGOUT' onPress={handleLogout} />
    //                 }}
    //             >
    //                 <Text style={{ fontSize: 20 }}>Location</Text>
    //             </View>
    //         </View>
    //     );
    // }

    const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

        let isSelected = accessibilityState.selected

        if (isSelected) {
            return (
                <View style={{ flex: 1, alignItems: "center" }}>
                    <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                        <View style={{ flex: 1, backgroundColor: "white" }}></View>
                        <Svg
                            width={70}
                            height={61}
                            viewBox="0 0 75 61"
                        >
                            <Path
                                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                                fill="white"
                            />
                        </Svg>
                        <View style={{ flex: 1, backgroundColor: "white" }}></View>
                    </View>

                    <TouchableOpacity
                        style={{
                            top: -22.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: "white"
                        }}
                        onPress={onPress}
                    >
                        {children}
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        height: 60,
                        backgroundColor: 'white'
                    }}
                    activeOpacity={1}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            )
        }
    }

    return (
        <Tab.Navigator
            ref={navigationRef}
            screenOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                }
            }}
        >
            <Tab.Screen
                name='HomeMian'
                component={HomeMian}

                options={{

                    headerShown: false,
                    tabBarIcon: ({ focused, size, }) => (
                        <FontAwesome
                            name='home'
                            size={size}
                            color={focused ? "#FC6D3F" : "#cdcdc2"}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, }) => (
                        <FontAwesome
                            name='codiepie'
                            size={size}
                            color={focused ? "#FC6D3F" : "#cdcdc2"}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            >
            </Tab.Screen>
            {Authenticated ? (
                <Tab.Screen
                    name='plus'
                    component={Addproducts}
                    options={{

                        tabBarIcon: ({ focused, size, }) => (
                            <FontAwesome
                                name='plus-square'
                                size={size}
                                color={focused ? "#FC6D3F" : "#cdcdc2"}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                >
                </Tab.Screen>
            ) : (
                <Tab.Screen
                    name='post'
                    component={Contact}
                    options={{

                        tabBarIcon: ({ focused, size, }) => (
                            <FontAwesome
                                name='plus-square'
                                size={size}
                                color={focused ? "#FC6D3F" : "#cdcdc2"}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                >
                </Tab.Screen>
            )

            }

            <Tab.Screen
                name='Like'
                component={Like}
                options={{
                    tabBarIcon: ({ focused, size, }) => (
                        <FontAwesome
                            name='heart'
                            size={size}
                            color={focused ? "#FC6D3F" : "#cdcdc2"}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            >
            </Tab.Screen>
            {Authenticated ? (
                <Tab.Screen
                    name='user'
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused, size, }) => (
                            <FontAwesome
                                name='user'
                                size={size}
                                color={focused ? "#FC6D3F" : "#cdcdc2"}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                >
                </Tab.Screen>
            ) : (
                <Tab.Screen
                    name='user'
                    component={Contact}
                    options={{
                        tabBarIcon: ({ focused, size, }) => (
                            <FontAwesome
                                name='user'
                                size={size}
                                color={focused ? "#FC6D3F" : "#cdcdc2"}
                            />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                            />
                        )
                    }}
                >
                </Tab.Screen>

            )

            }

        </Tab.Navigator>
    )
}