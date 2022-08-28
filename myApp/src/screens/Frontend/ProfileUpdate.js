import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput
} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';


import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native';
import { useAuthContext } from '../../components/context/AuthContext';

export default function Profileupdate({ navigation }) {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    const { user } = useAuthContext();
    const [image, setImage] = useState({});


    useEffect(() => {

        setName(user.userName)
        setAddress(user.address)
        setPhonenumber(user.phonenumber)
    }, [])


    const imageUplaod = async () => {

        try {
            const result = await launchImageLibrary();
            result.didCancel = true;
            let file = result.assets[0]

            setImage(file)
            console.log(image)



        } catch (err) {
            console.error(err)
            console.log("uploading while error")

        }

    }

    const singleItem = {
        userName: name,
        address: address,
        phonenumber: phonenumber
    }
    const SaveProfile = async () => {
        if (image.uri) {
            await storage().ref(`images/${image.fileName}`).putFile(image.uri).then(async () => {
                const url = await storage().ref(`images/${image.fileName}`).getDownloadURL();
                firestore()
                    .collection('users')
                    .doc(user.uid)
                    .update({ ...singleItem, url })
                    .then(() => {
                        console.log('User profile updated!');
                    });

            })
            console.log("Profile Updated")


        } else {

            firestore()
                .collection('users')
                .doc(user.uid)
                .update(singleItem)
                .then(() => {
                    console.log('User updated!');
                });



        }
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 25 }}>


                <Text
                    style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Profile
                </Text>


                <TouchableOpacity onPress={imageUplaod}>
                    {image.uri
                        ?

                        <Image
                            style={styles.userImg}
                            source={{ uri: image.uri || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wrXPLf0fSGdZXCPKp3Y-NrRNrnWLqQwvoQ&usqp=CAU' }}

                        />

                        :
                        <Ionicons
                            name="image-outline"
                            size={100}
                            color="#666"
                            style={{ textAlign: 'center' }}
                        />
                    }
                </TouchableOpacity>


                <TextInput
                    label={'Name'}
                    icon={
                        <Ionicons
                            name="pencil"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    labelValue={name}
                    onChangeText={(userName) => setName(userName)}

                />

                <TextInput
                    label={'Address'}
                    icon={
                        <Ionicons
                            name="ios-clipboard-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    labelValue={address}
                    onChangeText={(userAddress) => setAddress(userAddress)}

                />

                <TextInput
                    label={'Phonenumber'}
                    icon={
                        <Ionicons
                            name="call-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    labelValue={phonenumber}
                    onChangeText={(userNum) => setPhonenumber(userNum)}

                />
                <TouchableOpacity>

                    <Button title='submit' onPress={SaveProfile} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    userImg: {
        marginTop: 10,
        marginLeft: 90,
        height: 200,
        width: 200,
    }
})