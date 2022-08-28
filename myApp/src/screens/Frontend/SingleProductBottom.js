import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from "react-native";
import { useCartContext } from '../../components/context/CartContext';
import { COLORS, SIZES, FONTS } from '../../constants/theme'




export default function SingleProductBottom({ restaurant, amount, navigation }) {
    const { width, height } = Dimensions.get("window");
    const { addToCart } = useCartContext()


    const handleCard = () => {
        addToCart(restaurant, amount)
        navigation.navigate("cart")
    }

    return (
        <View style={{
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
        }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 24,
                    paddingHorizontal: 36,
                }}
            >
                <Text style={{ ...FONTS.h3 }}>Items In Cart</Text>
                <Text style={{ ...FONTS.h3 }}>{Number(amount) * Number(restaurant.price)}$</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: 'center',
                    paddingVertical: 24,
                    paddingHorizontal: 36,
                }}
            >
                <View style={{
                    flexDirection: "row"
                }}>
                    <EvilIcons
                        name='location'
                        size={30}
                        style={{ fontWeight: "bold", }}
                    />
                    <Text tyle={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>Location</Text>
                </View>
                <View style={{
                    flexDirection: "row"
                }}>
                    <FontAwesome
                        name='toggle-off'
                        size={25}

                    />
                    <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
                </View>

            </View>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: 'center',
                    padding: 24
                }}
            >
                <TouchableOpacity style={{
                    backgroundColor: "#FC6D3F",
                    width: width * 0.6,
                    padding: 10,
                    borderRadius: 10
                }}
                    onPress={handleCard}
                >
                    <Text style={{
                        textAlign: "center",
                        color: "#fff"
                    }}>ADD TO CART</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}