import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useGlobalProducts } from '../../components/context/ProductsContext';
import Products from './Products';

export default function Home({ navigation }) {

    const { filterProducts, allCategories, isloading, filterItems } = useGlobalProducts()


    const renderItem = ({ item }) => (
        <TouchableOpacity style={{
            paddingHorizontal: 40,
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginRight: 10,
            backgroundColor: "#eee"
        }}
            onPress={() => filterItems(item)}>
            <Text
                style={{
                    fontWeight: "700",
                    color: "blue",
                    textTransform: "uppercase"
                }}

            >{item}</Text>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ padding: 20 }} >
                <Text style={{ fontSize: 30, fontWeight: "500" }}>Main</Text>
                <Text style={{ fontSize: 30, fontWeight: "500" }}>Category</Text>
                <FlatList
                    data={allCategories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />
            </View>
            <Products navigation={navigation} filterProducts={filterProducts} />
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


