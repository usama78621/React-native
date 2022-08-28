import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Searchbar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useGlobalProducts } from '../../components/context/ProductsContext';
import { Dimensions } from 'react-native';
import ProductList from './ProductList';

var { width } = Dimensions.get("window")
var { height } = Dimensions.get("window")

export default function HomeMian() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const image = require('../../asserts/assets/images/burger-restaurant.jpg')
    const { products } = useGlobalProducts()
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <ScrollView>
            <View style={{
                flex: 1,
                backgroundColor: "#fff"
            }}>
                <View style={{
                    width: "100%",
                    backgroundColor: "#222",
                    paddingHorizontal: 60,
                    height: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Searchbar
                        placeholder="Search..."
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <View style={{
                    backgroundColor: "#eee",
                    paddingHorizontal: 38,
                    paddingVertical: 10,
                    width: "100%",
                    alignItems: "center",
                }}>
                    <View style={{
                        flexDirection: "row",
                        marginVertical: 10,
                        alignItems: "center"
                    }}>
                        <View style={{
                            backgroundColor: "#fff",
                            width: "50%",
                            marginEnd: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: 10,
                            padding: 15,
                            ...styles.shadow
                        }}>
                            <MaterialIcons
                                name='house'
                                size={50}
                                color="blue"
                            />
                            <View style={{
                                flexDirection: "column"
                            }}>
                                <Text style={{
                                    fontWeight: "500",
                                    fontSize: 15,
                                    color: "black"
                                }}>House</Text>
                                <Text style={{
                                    fontWeight: '300',
                                    color: "#222"

                                }}>400 items</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: "#fff",
                            width: "50%",
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: 10,
                            padding: 15,
                            ...styles.shadow
                        }}>
                            <MaterialIcons
                                name='apartment'
                                size={50}
                                color="blue"
                            />
                            <View style={{
                                flexDirection: "column"
                            }}>
                                <Text style={{
                                    fontWeight: "500",
                                    fontSize: 15,
                                    color: "black"
                                }}>Apartment</Text>
                                <Text style={{
                                    fontWeight: '300',
                                    color: "#222"

                                }}>400 items</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginVertical: 10,
                        alignItems: "center"
                    }}>
                        <View style={{
                            backgroundColor: "#fff",
                            width: "50%",
                            marginEnd: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: 10,
                            padding: 20,
                            ...styles.shadow
                        }}>
                            <MaterialIcons
                                name='local-hotel'
                                size={48}
                                color="blue"
                            />
                            <View style={{
                                flexDirection: "column"
                            }}>
                                <Text style={{
                                    fontWeight: "500",
                                    fontSize: 15,
                                    color: "black"
                                }}>House</Text>
                                <Text style={{
                                    fontWeight: '300',
                                    color: "#222"

                                }}>400 items</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: "#fff",
                            width: "50%",
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: 10,
                            padding: 20,
                            ...styles.shadow
                        }}>
                            <MaterialIcons
                                name='qr-code'
                                size={50}
                                color="blue"
                            />
                            <View style={{
                                flexDirection: "column"
                            }}>
                                <Text style={{
                                    fontWeight: "500",
                                    fontSize: 15,
                                    color: "black"
                                }}>House</Text>
                                <Text style={{
                                    fontWeight: '300',
                                    color: "#222"
                                }}>400 items</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{
                        flexDirection: "row",
                        padding: 20,
                        justifyContent: "space-between"
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: "#222"
                        }}>Nearby</Text>
                        <Text style={{
                            fontSize: 15,
                            color: "blue",
                        }}>Sell All</Text>
                    </View>
                </View>

                {products.length > 0 ?  //may be filtered products but not yet confirm confusion going on
                    (
                        <View style={styles.listContainer}>
                            {
                                products.map((item) => {
                                    return (
                                        <ProductList
                                            key={item.id}
                                            item={item}
                                        />
                                    )
                                })
                            }

                        </View>
                    ) : (
                        <View style={[styles.center, { height: height / 2 }]}>
                            <Text>No products found</Text>
                        </View>
                    )

                }
            </View>

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
        paddingBottom: 50,
    }
});
