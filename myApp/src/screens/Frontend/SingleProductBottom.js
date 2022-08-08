import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from "react-native";
import { useProductsContext } from '../../components/context/ProductContext';



export default function SingleProductBottom({ restaurant }) {
    const { width, height } = Dimensions.get("window");
    const { total, addToCart, } = useProductsContext()

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
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Items In Cart</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{total}$</Text>
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
                        size={40}
                        style={{ fontWeight: "bold" }}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Location</Text>
                </View>
                <View style={{
                    flexDirection: "row"
                }}>
                    <FontAwesome
                        name='toggle-off'
                        size={30}

                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>8888</Text>
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
                    onPress={() => addToCart(restaurant)}
                >
                    <Text style={{
                        textAlign: "center",
                        color: "#fff"
                    }}>ADD TO CART</Text>
                </TouchableOpacity>

            </View>
        </View >
    )
}