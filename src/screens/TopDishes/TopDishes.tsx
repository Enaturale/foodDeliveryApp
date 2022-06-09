import React from "react";
import {View, Text, FlatList, StyleSheet, Image, Pressable, Alert} from "react-native";
import DishesData from "../../data/Dishes";
import ShoppingCart from "react-native-vector-icons/MaterialIcons";


const TopDishes = ({navigation}) => {
    const addtoCart = () => {
        Alert.alert(
            "Cart",
            "Your preference has been added to the cart",
            [
                {
                    text: "Ok",
                    onPress: () => {console.log("Okay Pressed")}
                }
            ]
        )       

    };

    return(
        <View style={styles.container}>
            <Text style={styles.bigTitle}>Dishes Page</Text>
            <FlatList 
            data={DishesData}
            renderItem={({item}) => {
                return(
                    <View style={{marginVertical: 20,}}>
                        <Image source={{uri: item.image}} style={styles.imageContainer}/>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-between', width: 350,marginVertical: 5,}}>
                        <Text style={styles.amount}>${item.amount}</Text> 
                        <Pressable style={styles.pressBuyNow}>
                            <Text style={styles.buyNow}>Buy Now</Text>
                        </Pressable>
                        <Pressable onPress={addtoCart}>                                                    
                         <ShoppingCart 
                            name="shopping-cart" 
                            size={30} 
                            color="#F4BA19" 
                            style={{  }}
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
    container:{
        marginHorizontal: 20,
        marginVertical: 15,
    },
    bigTitle:{
        fontSize: 25,
        fontFamily:"Nunito-BoldItalic",
        color:'#000000'

    },
    title:{
        fontSize: 20,
        fontFamily:'Nunito-Bold'
    },
    imageContainer:{
        height: 300,     
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor:'#F4BA19' 
    },
    amount:{
        fontSize: 20,

    },
    buyNow:{
        fontSize: 18,  
        fontFamily: 'Nunito-Black' ,  
        marginHorizontal: 10,
        marginVertical: 5,

    },
    pressBuyNow:{
        backgroundColor:'#F4BA19',
        borderRadius: 5,
        height: 35,
        width: 100,

    }

})
export default TopDishes;