import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { restaurantData } from '../../contant/images'
import { Dimensions } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Products() {
    const { width, height } = Dimensions.get("window");

    const renderItem = ({ item }) => {
        return <TouchableOpacity activeOpacity={10}
            style={{
                marginBottom: 24
            }
            }
        >
            <View>
                <Image
                    source={item.photo}
                    resizeMode="center"
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 30
                    }}
                />
                <View>

                    <View style={{
                        position: "absolute",
                        bottom: 0,
                        height: 50,
                        backgroundColor: "#fff",
                        borderRadius: 20,
                        padding: 10,
                        width: width * 0.3,
                        borderTopRightRadius: 25,
                        borderBottomLeftRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}>
                        <Text style={{ fontSize: 18 }}>{item.duration}</Text>
                    </View>
                </View>
                <Text style={{
                    fontSize: 18,
                }}>{item.name}</Text>

                <View style={{
                    marginTop: 10,
                    flexDirection: "row"
                }}>
                    <FontAwesome
                        name='heart'
                        size={23}
                        color="#FC6D3F"
                        style={{
                            marginRight: 10
                        }}
                    />
                    <Text>{item.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    }
    return (
        <View>
            <FlatList
                data={restaurantData}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingBottom: 30
                }}
            />
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