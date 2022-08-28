import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Contact({ navigation }) {
    // const [usersADD, setUsersADD] = useState([])
    // console.log("usjsf", usersADD);
    // let users = [
    //     {
    //         id: 1,
    //         name: "usama"
    //     },
    //     {
    //         id: 2,
    //         name: "ali"
    //     },
    // ]
    // const add = async () => {
    //     console.log("add function working");


    //     try {
    //         await AsyncStorage.setItem("users", JSON.stringify(users)) || []
    //         console.log("users added");
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    // const getData = async () => {
    //     // get Data from Storage
    //     try {
    //         const data = await AsyncStorage.getItem('users');
    //         if (data !== null) {
    //             setUsersADD(JSON.parse(data))
    //             console.log("daga", JSON.parse(data
    //             ));
    //             return data;
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }

    // };

    // useEffect(() => {
    //     getData()
    // }, [])

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Button title='Login' color="#ff006e"
                onPress={navigation.navigate('Login')}
            />

        </View>
    )
}