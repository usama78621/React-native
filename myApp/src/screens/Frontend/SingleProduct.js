import React from 'react'
import { NativeBaseProvider } from 'native-base';
import { Image, View, Text, Animated, TouchableOpacity, } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from "react-native";
import SingleProductBottom from './SingleProductBottom';
import { useCartContext } from '../../components/context/CartContext';
import { COLORS, SIZES, FONTS } from '../../constants/theme'
import Swiper from 'react-native-swiper';


export default function SingleProduct({ route, navigation }) {
    const { width, height } = Dimensions.get("window");
    const { quantity, toggleAmount } = useCartContext()
    // const scrollX = (new Animated.Value(0))
    const [restaurant, setRestaurant] = React.useState(null)
    const [amount, setAmount] = React.useState(1)

    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1
            return tempAmount
        })
    }
    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1
            if (oldAmount < 2) {
                return oldAmount
            }
            return tempAmount
        })
    }
    React.useEffect(() => {
        let { item } = route.params
        setRestaurant(item)
    }, [])

    // function renderDots() {
    //     const dotPosition = Animated.divide(scrollX, width)
    //     return (
    //         <View style={{ height: 30 }}>
    //             <View
    //                 style={{
    //                     flexDirection: 'row',
    //                     alignItems: 'center',
    //                     justifyContent: 'center',
    //                     height: 10
    //                 }}
    //             >
    //                 {restaurant.images.map((item, index) => {

    //                     const opacity = dotPosition.interpolate({
    //                         inputRange: [index - 1, index, index + 1],
    //                         outputRange: [0.3, 1, 0.3],
    //                         extrapolate: "clamp"
    //                     })

    //                     const dotSize = dotPosition.interpolate({
    //                         inputRange: [index - 1, index, index + 1],
    //                         outputRange: [8 * 0.8, 12, 8 * 0.8],
    //                         extrapolate: "clamp"
    //                     })

    //                     const dotColor = dotPosition.interpolate({
    //                         inputRange: [index - 1, index, index + 1],
    //                         outputRange: ["#cdcdc2", "#FC6D3F", "#cdcdc2"],
    //                         extrapolate: "clamp"
    //                     })

    //                     return (
    //                         <Animated.View
    //                             key={`dot-${index}`}
    //                             opacity={opacity}
    //                             style={{
    //                                 borderRadius: 22,
    //                                 marginHorizontal: 6,
    //                                 width: dotSize,
    //                                 height: dotSize,
    //                                 backgroundColor: dotColor
    //                             }}
    //                         />
    //                     )
    //                 })}
    //             </View>
    //         </View>
    //     )
    // }
    return (
        <>
            {restaurant &&
                <NativeBaseProvider
                >
                    <Swiper autoplay={true} autoplayTimeout={4}
                        activeDot={
                            <View style={{ backgroundColor: '#FC6D3F', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
                        }
                    >
                        {restaurant.images.map((item, index) => (
                            <Image key={index} source={{ uri: item }}
                                style={{
                                    height: "100%",
                                    width: "100%"
                                }}
                            />
                        ))
                        }

                    </Swiper>

                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
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
                            onPress={decrease}
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
                            }}>{amount}</Text>
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
                            onPress={increase}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold"
                            }}>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View
                        style={{
                            width: SIZES.width,
                            alignItems: 'center',
                            paddingHorizontal: SIZES.padding * 2,
                            marginBottom: 20
                        }}
                    >
                        <Text style={{ marginVertical: 10, textAlign: 'center', ...FONTS.h2 }}>{restaurant.nameProduct} - {restaurant.price.toFixed(2)}$</Text>
                        <Text style={{ ...FONTS.body3, textAlign: "center" }}>{restaurant.description}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 20

                        }}
                    >
                        <FontAwesome
                            name='fire'
                            color="#e25822"
                            size={30}
                        />

                        <Text style={{
                            ...FONTS.body3, color: COLORS.darygray,
                            marginLeft: 10
                        }}>{restaurant.calorie.toFixed(2)} cal</Text>
                    </View>
                    <SingleProductBottom restaurant={restaurant} amount={amount} navigation={navigation} />
                </NativeBaseProvider>
            }
        </>
    )
}