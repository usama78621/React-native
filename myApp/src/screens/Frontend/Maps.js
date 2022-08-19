import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

export default function Maps() {
    return (
        <View style={{
            flex: 1
        }}>
            <MapView style={{
                flex: 1
            }}></MapView>

        </View>
    )
}