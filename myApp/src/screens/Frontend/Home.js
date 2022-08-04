import React from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { categoryData } from '../../contant/Icon'
import Products from './Products';

export default function Home({ navigation }) {
    const [seleted, setSeleted] = React.useState(null)

    const SetCategorySeleced = (item) => (
        setSeleted(item)
    )

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
            onPress={() => SetCategorySeleced(item)}
        >
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
                    source={item.icon}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                    }}

                />
            </View>
            <Text
                style={{
                    marginTop: 12,
                    color: (seleted?.id === item.id ? "white" : "#222"),
                    fontWeight: "700"
                }}
            >{item.name}</Text>
        </TouchableOpacity>
    )

    return (
        <View >
            <View style={{ padding: 24 }} >
                <Text style={{ fontSize: 20, }}>Main</Text>
                <Text style={{ fontSize: 20, }}>Category</Text>
                <FlatList
                    data={categoryData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 24 }}
                />
            </View>
            <Products />
        </View>
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


