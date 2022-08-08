import React from 'react'
import { Image, NativeBaseProvider } from 'native-base';
import { View, Text, Animated, TouchableOpacity, SafeAreaView, } from 'react-native'
import { Dimensions } from "react-native";
import SingleProductBottom from './SingleProductBottom';
import { useProductsContext } from '../../components/context/ProductContext';


export default function SingleProduct({ route, navigation }) {
    const { width, height } = Dimensions.get("window");
    const { quantity, increase, decrease } = useProductsContext()
    const scrollX = (new Animated.Value(0))
    const [restaurant, setRestaurant] = React.useState(null)

    // function infiniteScroll(item) {
    //     const numberOfData = item.length
    //     let scrollValue = 0, scrolled = 0

    //     setInterval(function () {
    //         scrolled++
    //         if (scrolled < numberOfData)
    //             scrollValue = scrollValue + width

    //         console.log(scrollValue);
    //         else {
    //             scrollValue = 0
    //             scrolled = 0
    //         }
    //     }, 3000)
    // }




    React.useEffect(() => {
        let { item } = route.params
        setRestaurant(item)
        // infiniteScroll(item)
    })

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, width)
        // color={focused ? "#FC6D3F" : "#cdcdc2"}

        return (
            <View style={{ height: 30 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 10
                    }}
                >
                    {restaurant?.menu.map((item, index) => {

                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [4 * 0.8, 10, 4 * 0.8],
                            extrapolate: "clamp"
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: ["#cdcdc2", "#FC6D3F", "#cdcdc2"],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: 22,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }
    return (
        <NativeBaseProvider
        >
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } }
                ], { useNativeDriver: false, })}
            >
                {
                    restaurant?.menu.map((item, index) => (
                        <View key={`menu-${index}`
                        }
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
                                        height: "100%",
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
                                        onPress={() => decrease(item.id)}
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
                                        }}>{quantity}</Text>
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
                                        onPress={() => increase(item.id)}
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
            <View>
                {renderDots()}
                <SingleProductBottom restaurant={restaurant} />
            </View>

        </NativeBaseProvider>
    )
}