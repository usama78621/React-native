import { Image, NativeBaseProvider } from 'native-base';
import React from 'react'
import { View, Text, Animated, TouchableOpacity, } from 'react-native'
import { Dimensions } from "react-native";


export default function SingleProduct({ route, navigation }) {
    const { width, height } = Dimensions.get("window");
    const scrollX = new Animated.Value(0)
    const [restaurant, setRestaurant] = React.useState(null)
    React.useEffect(() => {
        let { item } = route.params
        setRestaurant(item)
    })
    const rendedot = () => {
        const dotpostion = Animated.divide(scrollX, width)
        const darkgrayColor = "#898C95"
        const primaryColor = "#FC6D3F"
        return (
            <View style={{
                height: 30,
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 10
                }}>
                    {restaurant?.menu.map((item, index) => {
                        const opacity = dotpostion.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        })
                        const dotSize = dotpostion.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [6.4, 10, 6.4],
                            extrapolate: "clamp"
                        })
                        const dotColor = dotpostion.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [darkgrayColor, primaryColor, darkgrayColor],
                            extrapolate: "clamp"
                        })
                        return (
                            <View
                                key={`manu-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: 22,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor
                                }}
                            >
                            </View>
                        )
                    })

                    }
                </View>

            </View>
        )
    }
    return (
        <NativeBaseProvider>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            // scroll
            >
                {
                    restaurant?.menu.map((item, index) => (
                        <View key={`menu-${index}`}
                            style={{
                                alignItems: "center"
                            }}>
                            <View style={{
                                height: height * 0.35,
                            }}>
                                <Image
                                    source={item.photo}
                                    alt="image"
                                    resizeMode="cover"
                                    style={{
                                        width: width,
                                        height: "100%"
                                    }}
                                />
                                <View
                                    style={{
                                        position: "absolute",
                                        bottom: -20,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "row",
                                        width: width,
                                        height: 50
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "white",
                                            width: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderBottomLeftRadius: 25,
                                            borderTopLeftRadius: 25
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: "bold"
                                        }}>-</Text>
                                    </TouchableOpacity>
                                    <View style={{
                                        backgroundColor: "white",
                                        width: 30,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Text style={{
                                            fontSize: 20
                                        }}>5</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "white",
                                            width: 50,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderBottomEndRadius: 25,
                                            borderTopEndRadius: 25
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: "bold"
                                        }}>+</Text>
                                    </TouchableOpacity>

                                </View>
                                <View
                                    style={{
                                        width: width,
                                        alignItems: 'center',
                                        marginTop: 15,
                                        paddingHorizontal: 24
                                    }}
                                >
                                    <Text style={{ marginVertical: 10, textAlign: 'center', }}>{item.name} - ${item.price.toFixed(2)}</Text>
                                    <Text style={{ fontSize: 16, lineHeight: 22 }}>{item.description}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>
        </NativeBaseProvider>
    )
}