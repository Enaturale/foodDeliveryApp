import React from "react";
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel';
import Styles from "./Styles";
import ShoppingCart from "react-native-vector-icons/MaterialIcons";



const  CarouselItem  = ({ item }, parallaxProps) => {
    
    return (
        
            <View style={{ height: 270, width: 300, marginVertical: 10,}}>

                <ParallaxImage
                    source={{ uri: item.image }}
                    containerStyle={Styles.image}
                    style={{marginTop: 10, width: 350,
                       
                        }}
                    {...parallaxProps}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 320, marginVertical: 5, }}>
                    <Text style={Styles.imageTitle}>{item.title}</Text>
                   
                    <Text style={Styles.imageAmount}>${item.amount}</Text>
                </View>

                <View style={{flexDirection: 'row', width: 320, justifyContent:'space-between', marginBottom: 30,}}>
                        <Pressable 
                           style={Styles.buyNowButton}>
                            <Text style={{fontSize: 20, color:'#F4BA19', fontFamily: 'Nunito-Black'}}>Buy Now</Text>
                        </Pressable>
                        <ShoppingCart name="shopping-cart" color="#F4BA19" size={30} />
                    </View>
            </View>
        

    )
}

export default CarouselItem;