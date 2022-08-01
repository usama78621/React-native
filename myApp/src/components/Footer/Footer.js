import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.h1}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "red",
        alignItems: "center"
    },
    h1: {
        fontSize: 24,
        color: '#fff'
    }
})