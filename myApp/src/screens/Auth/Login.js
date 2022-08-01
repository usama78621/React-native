import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export default function Login() {
    const [state, setState] = useState({
        email: "",
        password: "",
        secureTextEntry: true,
        text_inputChange: false
    })
    const handleChange = (name, val) => {
        if (val.length !== 0) {
            setState({ ...state, [name]: val })
        } else {
            setState({
                ...state,
                text_inputChange: false
            })
        }
    }
    const handleShowPassord = () => {
        setState({
            ...state,
            secureTextEntry: !state.secureTextEntry
        })
    }
    const handleSubmit = () => {
        console.log('1344')
        console.log(state);
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.h2}>Wellcome!</Text>
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
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={handleSubmit}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#009387",
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