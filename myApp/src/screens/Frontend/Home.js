import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useGlobalProducts } from '../../components/context/ProductsContext';
import { categoryData } from '../../constants/icons'
import { restaurantData } from '../../constants/images'
import Products from './Products';

export default function Home({ navigation }) {
    const [seleted, setSeleted] = useState({})
    const [product, setProduct] = useState(restaurantData)
    const [category, setCategory] = useState("")
    const { products, products_error, products_loading } = useGlobalProducts()

    useEffect(() => {
        if (category) {
            let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
            setProduct(restaurantList)
            setSeleted(category)
        }
    }, [category])

    const renderItem = ({ item }) => (
        <TouchableOpacity style={{
            padding: 10,
            backgroundColor: (seleted?.id === item.id ? "#FC6D3F" : "white"),
            paddingBottom: 24,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginRight: 10,
            ...styles.shadow
        }}
            onPress={() => setCategory(item)}>
            <View
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#eee",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Image
                    source={{ uri: item.images[0] }}
                    resizeMode="contain"
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 22
                    }}

                />
            </View>
            <Text
                style={{
                    marginTop: 12,
                    color: (seleted?.id === item.id ? "white" : "#222"),
                    fontWeight: "700"
                }}
            >{item.category}</Text>
        </TouchableOpacity >
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ padding: 24 }} >
                <Text style={{ fontSize: 20, }}>Main</Text>
                <Text style={{ fontSize: 20, }}>Category</Text>
                <FlatList
                    data={products}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 24 }}
                />
            </View>
            <Products navigation={navigation} products={products} />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})


