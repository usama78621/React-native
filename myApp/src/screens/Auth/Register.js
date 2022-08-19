import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useAuthContext } from '../../components/context/AuthContext';


export default function Login({ navigation }) {
    const { dispatch } = useAuthContext()
    const [state, setState] = useState({
        email: "",
        password: "",
        Comfirmpassword: "",
        secureTextEntry: true,
        Comfirm_secureTextEntry: true,
        text_inputChange: false
    })
    const handleChange = (name, val) => {
        setState({ ...state, [name]: val })
        if (state.email.length !== 0) {
            setState({
                ...state,
                [name]: val,
                text_inputChange: true
            })
        } else {
            setState({
                ...state,
                [name]: val,
                text_inputChange: false
            })
        }
    }
    const handleShowPassord = () => {
        setState({
            ...state,
            secureTextEntry: !state.secureTextEntry,
        })
    }
    const handleComfirmShowPassord = () => {
        setState({
            ...state,
            Comfirm_secureTextEntry: !state.Comfirm_secureTextEntry,
        })
    }
    const handleSubmit = async () => {
        let { email, uid } = user
        if (state.email === "") {
            return alert("Plase enter email")
        } if (state.password === "") {
            return alert("Plase enter password")
        }
        if (state.password !== state.Comfirmpassword) {
            return alert("Please enter same Password")
        }
        let UserData = {
            email,
            uid,
            role: "user"
        }
        await auth()
            .createUserWithEmailAndPassword(state.email, state.password)
            .then(() => {
                setState({
                    email: "",
                    password: "",
                    Comfirmpassword: ""
                })
                dispatch({ type: "LOGIN" })
                alert('User account created & signed in!');
                firestore()
                    .collection('users')
                    .doc(user.uid)
                    .set(UserData)
                    .then(() => {
                        console.log('User added!');
                    }).catch(e => {
                        console.error(e)
                    })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    return alert('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    return alert('That email address is invalid!');
                }
                if (error.code === 'auth/weak-password') {
                    return alert('Password should be at least 6 characters');
                }
                alert(error);
            });

    }
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor='#FC6D3F' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.h2}>Register Now!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color="#05375a"
                        size={22}
                    />
                    <TextInput
                        placeholder='Enter Email'
                        autoCapitalize='none'
                        style={styles.inputText}
                        placeholderTextColor="#666666"
                        onChangeText={(val) => handleChange("email", val)}
                        keyboardType="email-address"
                        value={state.email}
                    />
                    {state.text_inputChange ?
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                        : null}
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color="#05375a"
                        size={22}
                    />
                    <TextInput
                        placeholder='Enter Password'
                        secureTextEntry={state.secureTextEntry ? true : false}
                        autoCapitalize='none'
                        style={styles.inputText}
                        placeholderTextColor="#666666"
                        onChangeText={(val) => handleChange("password", val)}
                        keyboardType="numeric"
                        value={state.password}
                    />
                    <TouchableOpacity
                        onPress={handleShowPassord}
                    >{state.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={22}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={22}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Comfirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='lock'
                        color="#05375a"
                        size={22}
                    />
                    <TextInput
                        placeholder='Comfirm Password'
                        secureTextEntry={state.Comfirm_secureTextEntry ? true : false}
                        autoCapitalize='none'
                        style={styles.inputText}
                        placeholderTextColor="#666666"
                        onChangeText={(val) => handleChange("Comfirmpassword", val)}
                        keyboardType="numeric"
                        value={state.Comfirmpassword}
                    />
                    <TouchableOpacity
                        onPress={handleComfirmShowPassord}
                    >{state.Comfirm_secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={22}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={22}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={handleSubmit}
                    >
                        <LinearGradient
                            colors={['#FC6D3F', '#FC6D3F']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.signIn, {
                            borderColor: "#FC6D3F",
                            marginTop: 15,
                            borderWidth: 1
                        }]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={[styles.textSign, {
                            color: '#FC6D3F'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FC6D3F",
    }, h2: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold"
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 50,
        paddingVertical: 30
    }, action: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    }, inputText: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    }, text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    footer: {
        flex: 3,
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})