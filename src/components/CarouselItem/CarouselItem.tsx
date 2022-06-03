import React from "react";
import {View, Text, SafeAreaView} from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel';
import Styles from "./Styles";

const CarouselItem = ({item}, parallaxProps) => {
    return(
        <SafeAreaView style={Styles.item}>
            <ParallaxImage 
              source={{uri: item.image}}
              {...parallaxProps}
              containerStyle={Styles.imageContainer}
              style={Styles.image}

            />
        </SafeAreaView>
    )
}

export default CarouselItem;