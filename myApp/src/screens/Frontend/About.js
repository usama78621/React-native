import React from 'react'
import { View, Text, Button } from 'react-native'

export default function About({ route, navigation }) {
    const { name, age } = route.params;
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text
                style={{
                    fontSize: 35
                }}
            >About</Text>
            <Text>
                Name {name}
            </Text>
            <Text>
                Age {age}
            </Text>
            <Button title="Move to Contact Page"
                onPress={() => navigation.navigate("Contact")}
            ></Button>
        </View>
    )
}