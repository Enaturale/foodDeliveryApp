import React from "react";
import { View, Text, FlatList, StyleSheet, Image, Pressable, Alert } from "react-native";
import DishesData from "../../data/Dishes";
import ShoppingCart from "react-native-vector-icons/MaterialIcons";


const TopDishes = ({ navigation }) => {
    const addtoCart = () => {
        Alert.alert(
            "Cart",
            "Your preference has been added to the cart",
            [
                {
                    text: "Ok",
                    onPress: () => { console.log("Okay Pressed") }
                }
            ]
        );
        navigation.navigate("Your Orders");

    };

    return (
        <View style={styles.container}>
            <Text style={styles.bigTitle}>Dishes Page</Text>
            <FlatList
                data={DishesData}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginVertical: 20, marginBottom: 20, }}>
                            <Image source={{ uri: item.image }} style={styles.imageContainer} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 350, marginVertical: 5, }}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.amount}>${item.amount}</Text>

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 330, marginVertical: 5, }}>
                                <Pressable style={styles.pressBuyNow}>
                                    <Text style={styles.buyNow}>Buy Now</Text>
                                </Pressable>
                                <Pressable onPress={addtoCart}>
                                    <ShoppingCart
                                        name="shopping-cart"
                                        size={30}
                                        color="#F4BA19"
                                        style={{ marginTop: 3, }}
                                    />
                                </Pressable>
                            </View>

                        </View>

                    )
                }}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 15,
        paddingBottom: 40,
    },
    bigTitle: {
        fontSize: 25,
        fontFamily: "Nunito-BoldItalic",
        color: '#000000'

    },
    title: {
        fontSize: 21,
        fontFamily: 'Nunito-Bold',
        marginLeft: 20,
        color: 'black',
    },
    imageContainer: {
        height: 200,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#F4BA19',
        resizeMode:'contain',
    },
    amount: {
        fontSize: 19,
        fontFamily:"Nunito-BoldItalic"

    },
    buyNow: {
        fontSize: 20,
        fontFamily: 'Nunito-Black',
        marginHorizontal: 10,
        marginVertical: 5,
        color: '#F4BA19'

    },
    pressBuyNow: {
        backgroundColor: 'black',
        borderRadius: 5,
        height: 45,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,

    }

})
export default TopDishes;