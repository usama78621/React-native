import React, { useCallback } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useFocusEffect, } from '@react-navigation/native';


export default function Home({ navigation }) {

    useFocusEffect(
        useCallback(
            () => {
                alert("Screen Was Fouse")
                return () => {
                    alert("Screen Was UnFouse")
                }
            },
            [navigation]
        )
    )

    return <View style={styles.flexContainer} >
        <Text style={styles.h1}>Home</Text>
        <Button title='move to About page'
            onPress={() => navigation.navigate('About',
                { name: "usama", age: 21 })}
        ></Button>
    </View>
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    h1: {
        fontSize: 28,
    }
})




