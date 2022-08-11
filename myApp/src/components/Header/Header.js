import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Header({ navigation }) {
    return (
        <View style={styles.HeaderContainer}>
            <TouchableOpacity style={{
                width: 50,
                justifyContent: 'center',
                paddingLeft: 12,
            }}>
                <MaterialIcons
                    name='location-pin'
                    size={40}
                />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        width: '70%',
                        height: "100%",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25
                    }}
                >
                    <Text style={{ fontSize: 20 }}>Location</Text>
                </View>
            </View>
            <TouchableOpacity

                style={{
                    width: 50,
                    justifyContent: "center",
                }}
            >
                <FontAwesome5Icon
                    name='shopping-basket'
                    size={40}
                />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: "row",
        height: 50
    },

})
