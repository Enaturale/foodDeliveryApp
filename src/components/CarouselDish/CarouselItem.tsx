import React from "react";
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel';
import Styles from "./Styles";

const CarouselItem = ({ item }, parallaxProps) => {
    return (
        <Pressable>
            <View style={{ height: 300, width: 340, marginVertical: 10,}}>

                <ParallaxImage
                    source={{ uri: item.image }}
                    containerStyle={Styles.image}
                    style={{marginTop: 10,}}
                    {...parallaxProps}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280, marginVertical: 5, }}>
                    <Text style={Styles.imageTitle}>{item.title}</Text>
                    <Text style={Styles.imageAmount}>${item.amount}</Text>
                </View>
            </View>
        </Pressable>

    )
}

export default CarouselItem;