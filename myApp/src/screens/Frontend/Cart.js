import React, { useState, useEffect } from 'react';
import { useStripe } from "@stripe/stripe-react-native";

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCartContext } from '../../components/context/CartContext';

const MyCart = () => {
    const { cart, removeItem, toggleAmount, total } = useCartContext()
    const stripe = useStripe();

    const payment = async () => {
        try {
            // sending request
            const response = await fetch("http://192.168.18.12:3000/pay", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (!response.ok) return console.log(data.message);
            const clientSecret = data.clientSecret;
            const initSheet = await stripe.initPaymentSheet({
                paymentIntentClientSecret: clientSecret,
                merchantDisplayName: 'Merchant Name',
            });
            if (initSheet.error) return console.log(initSheet.error.message);
            const presentSheet = await stripe.presentPaymentSheet({
                clientSecret,
            });
            if (presentSheet.error) return console.log(presentSheet.error.message);
            alert("Payment complete, thank you!");
        } catch (err) {
            console.error(err);
            console.log("Something went wrong, try again later!");
        }
    };
    const increase = (id) => {
        toggleAmount(id, "inc")
    }
    const decrease = (id) => {
        toggleAmount(id, "dec")
    }

    const renderProducts = (cartItem, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    width: '100%',
                    height: 100,
                    marginVertical: 6,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        width: '30%',
                        height: 100,
                        padding: 14,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "#dddd",
                        borderRadius: 10,
                        marginRight: 22,
                    }}>
                    <Image
                        source={{ uri: cartItem.images[0] }}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        height: '100%',
                        justifyContent: 'space-around',
                    }}>
                    <View style={{}}>
                        <Text
                            style={{
                                fontSize: 18,
                                maxWidth: '100%',
                                color: "#222",
                                fontWeight: '600',
                                letterSpacing: 1,
                            }}>
                            {cart.name}
                        </Text>
                        <View
                            style={{
                                marginTop: 4,
                                flexDirection: 'row',
                                alignItems: 'center',
                                opacity: 0.6,
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '400',
                                    maxWidth: '85%',
                                    marginRight: 4,
                                }}>
                                Price  {cartItem.price}$
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity
                                onPress={() => decrease(cartItem.id)}
                                style={{
                                    borderRadius: 100,
                                    marginRight: 20,
                                    padding: 4,
                                    borderWidth: 1,
                                    borderColor: "red",
                                    opacity: 0.5,
                                }}>
                                <MaterialCommunityIcons
                                    name="minus"
                                    style={{
                                        fontSize: 16,
                                        color: "dada",
                                    }}
                                />
                            </TouchableOpacity>
                            <Text>{cartItem.amount}</Text>
                            <TouchableOpacity
                                onPress={() => increase(cartItem.id)}
                                style={{
                                    borderRadius: 100,
                                    marginLeft: 20,
                                    padding: 4,
                                    borderWidth: 1,
                                    borderColor: "red",
                                    opacity: 0.5,
                                }}>
                                <MaterialCommunityIcons
                                    name="plus"
                                    style={{
                                        fontSize: 16,
                                        color: "dadada",
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => removeItem(cartItem.id)}>
                            <MaterialCommunityIcons
                                name="delete-outline"
                                style={{
                                    fontSize: 16,
                                    color: "dadada",
                                    backgroundColor: "eee",
                                    padding: 8,
                                    borderRadius: 100,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            {
                cart.length === 0 ?
                    <View style={{
                        flex: 1,
                        backgroundColor: '#FFFf',
                    }}>
                        <Text style={{
                            textAlign: "center",
                            marginTop: 50,
                            fontSize: 20
                        }}>
                            No Item In Cart at a Time
                        </Text>
                    </View>
                    :
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: "white",
                            position: 'relative',
                        }}>
                        <ScrollView>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "#222",
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                    paddingTop: 20,
                                    paddingLeft: 16,
                                    marginBottom: 10,
                                }}>
                                My Cart
                            </Text>
                            <View style={{ paddingHorizontal: 16 }}>
                                {cart ? cart.map(renderProducts) : null}
                            </View>
                            <View>
                                <View
                                    style={{
                                        paddingHorizontal: 16,
                                        marginVertical: 10,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: "#222",
                                            fontWeight: '500',
                                            letterSpacing: 1,
                                            marginBottom: 20,
                                        }}>
                                        Delivery Location
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '80%',
                                                alignItems: 'center',
                                            }}>
                                            <View
                                                style={{
                                                    color: "blue",
                                                    backgroundColor: "#eee",
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: 12,
                                                    borderRadius: 10,
                                                    marginRight: 18,
                                                }}>
                                                <MaterialCommunityIcons
                                                    name="truck-delivery-outline"
                                                    style={{
                                                        fontSize: 18,
                                                        color: "#FC6D3F",
                                                    }}
                                                />
                                            </View>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        color: "#222",
                                                        fontWeight: '500',
                                                    }}>
                                                    2 Petre Melikishvili St.
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        color: "#222",
                                                        fontWeight: '400',
                                                        lineHeight: 20,
                                                        opacity: 0.5,
                                                    }}>
                                                    0162, Tbilisi
                                                </Text>
                                            </View>
                                        </View>
                                        <MaterialCommunityIcons
                                            name="chevron-right"
                                            style={{ fontSize: 22, color: "#222" }}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        paddingHorizontal: 16,
                                        marginVertical: 10,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: "#222",
                                            fontWeight: '500',
                                            letterSpacing: 1,
                                            marginBottom: 20,
                                        }}>
                                        Payment Method
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '80%',
                                                alignItems: 'center',
                                            }}>
                                            <View
                                                style={{
                                                    color: "blue",
                                                    backgroundColor: "#f1f0",
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    padding: 12,
                                                    borderRadius: 10,
                                                    marginRight: 18,
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        fontWeight: '900',
                                                        color: "#FC6D3F",
                                                        letterSpacing: 1,
                                                    }}>
                                                    VISA
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        color: "#222",
                                                        fontWeight: '500',
                                                    }}>
                                                    Visa Classic
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        color: "#222",
                                                        fontWeight: '400',
                                                        lineHeight: 20,
                                                        opacity: 0.5,
                                                    }}>
                                                    ****-9092
                                                </Text>
                                            </View>
                                        </View>
                                        <MaterialCommunityIcons
                                            name="chevron-right"
                                            style={{ fontSize: 22, color: "#222" }}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        paddingHorizontal: 16,
                                        marginTop: 40,
                                        marginBottom: 80,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: "#222",
                                            fontWeight: '500',
                                            letterSpacing: 1,
                                            marginBottom: 20,
                                        }}>
                                        Order Info
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: 8,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: '400',
                                                maxWidth: '80%',
                                                color: "#222",
                                                opacity: 0.5,
                                            }}>
                                            Subtotal
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: '400',
                                                color: "#222",
                                                opacity: 0.8,
                                            }}>
                                            ${total}.00
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: 22,
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: '400',
                                                maxWidth: '80%',
                                                color: "#222",
                                                opacity: 0.5,
                                            }}>
                                            Shipping Tax
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: '400',
                                                color: "#222",
                                                opacity: 0.8,
                                            }}>
                                            ${total / 20}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: '400',
                                                maxWidth: '80%',
                                                color: "#222",
                                                opacity: 0.5,
                                            }}>
                                            Total
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: '500',
                                                color: "#222",
                                            }}>
                                            ${total + total / 20}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>

                        <View
                            style={{
                                position: 'absolute',
                                bottom: 10,
                                height: '8%',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity
                                onPress={payment}
                                style={{
                                    width: '86%',
                                    height: '90%',
                                    backgroundColor: "#FC6D3F",
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: '500',
                                        letterSpacing: 1,
                                        color: "white",
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    CHECKOUT (${total + total / 20} )
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }
        </>

    );
};

export default MyCart;