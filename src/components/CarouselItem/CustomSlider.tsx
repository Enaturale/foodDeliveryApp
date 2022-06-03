import React from "react";
import {View, Text, Dimensions}  from 'react-native';
import Styles from "./Styles";
import Carousel from 'react-native-snap-carousel';
import CarouselItem from "./CarouselItem";
import CustomPaging from "./CustomPaging";

const {width} = Dimensions.get('window');

const CustomSlider = ({data}) => {
    const [slideIndex, setSlideIndex] = React.useState(0);

    const settings = {
        sliderWidth: width,
        sliderHeight: width,
        itemWidth: width - 80,
        data: data,
        renderItem: CarouselItem,
        hasParallaxImages: true,
        onSnapToItem: (index) => setSlideIndex(index),
      };

    return(
        <View style={Styles.mainContainer}>
            <Carousel 
            {...settings}            
          />

        <CustomPaging data={data}  activeSlide={slideIndex} />

        </View>
    )
}

export default CustomSlider;