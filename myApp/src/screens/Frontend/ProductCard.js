import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native';
// import Toast from 'react-native-toast-message'



var { width } = Dimensions.get("window")

export default function ProductCard(props) {
    const { description, price, images } = props;
    console.log(props)
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={{ uri: images[0] }}
            />
            {/* {console.log("image", image)} */}
            <View style={styles.card} />
            <Text style={styles.title}>
                {description.length > 15 ? description.substring(0, 15 - 3)
                    + "..." : description
                }
            </Text>
            <Text style={styles.price}>
                ${price}
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: "center",
        elevation: 8,
        backgroundColor: "white"

    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
});