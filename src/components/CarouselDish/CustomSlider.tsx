import React from "react";
import {View, Text, Dimensions}  from 'react-native';

import Carousel from 'react-native-snap-carousel';
import CarouselItem from "./CarouselItem";


const {width} = Dimensions.get("window");

const CustomSlider = ({dishes}) => {
    const [slideIndex, setSlideIndex] = React.useState(0);

    const settings = {
        sliderWidth: width,
        sliderHeight: width,
        itemWidth: width - 80,
        data: dishes,
        renderItem: CarouselItem,
        hasParallaxImages: true,
        onSnapToItem: (index) => setSlideIndex(index),
      };

    return(
        <View style={{}}>
            <Carousel  
               {...settings}            
            />

       

        </View>
    )
}

export default CustomSlider;