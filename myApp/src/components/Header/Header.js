import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.HeaderContainer}>
            <Text style={styles.Name}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    Name: {
        fontSize: 28,
        color: "#fff"
    }
})
