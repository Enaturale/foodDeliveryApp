import React from "react";
import {View, Text, Dimensions}  from 'react-native';
import { Pagination } from "react-native-snap-carousel";
import Styles from "./Styles";

const CustomPaging = ({data, activeSlide}) => {
    const settings ={
        dotsLength: data.length,
        activeDotIndex: activeSlide,
        containerStyle: Styles.dotContainer,
        dotStyle: Styles.dotStyle,
        inactiveDotStyle: Styles.inactiveDotStyle,
        inactiveDotOpacity: 0.4,
        inactiveDotScale: 0.6,
    };

    return <Pagination {...settings} />
}

export default CustomPaging;
