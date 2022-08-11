import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Contact({ navigation }) {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Button title='Go back To Home Page' color="#ff006e"
                onPress={() => navigation.popToTop()}

            ></Button>
            <Text style={{
                fontSize: 35,
                marginBottom: 20
            }}>Contact</Text>
            <Button title='Go back About page'
                color="#023047"
                onPress={() => navigation.goBack()}></Button>
        </View>
    )
}