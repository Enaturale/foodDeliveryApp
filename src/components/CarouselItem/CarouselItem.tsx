import React from "react";
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel';
import Styles from "./Styles";

const CarouselItem = ({ item }, parallaxProps) => {
    return (
        <Pressable>
            <SafeAreaView style={Styles.item}>
                
                    <ParallaxImage
                        source={{ uri: item.image }}
                        containerStyle={Styles.imageContainer}
                        style={Styles.image}
                        {...parallaxProps}
                    />
                <View style={{}}>
                </View>
            </SafeAreaView>
        </Pressable>

    )
}

export default CarouselItem;