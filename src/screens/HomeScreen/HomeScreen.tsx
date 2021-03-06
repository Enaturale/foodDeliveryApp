import React from "react";
import { View, Text, Pressable } from "react-native";
import CustomSlider from "../../components/CarouselItem/CustomSlider";
import Styles from "./Styles";
import carousel from "../../components/CarouselItem/carousel";



const HomeScreen = ({navigation}) => {
    const gotoDashboard = () => {
        navigation.navigate("Dashboard")
    }
    
    return(
        <View style={Styles.container}>
            {/* Image slider here */}
             <View>
                <CustomSlider data={carousel} />
            </View> 

            <View>
               <Text style={Styles.title}>Our Kitchen</Text>
            </View>
            <View>
                <Text style={Styles.subtitle}>Enjoy different dishes from our top chefs!</Text>
                <Text style={Styles.subtitle}>Inter-state delivery!</Text>
            </View>

            <Pressable style={Styles.pressable} onPress={gotoDashboard}>
                <Text style={Styles.pressableText}>
                    Get Started
                </Text>
            </Pressable>
            
        </View>
    )
}

export default HomeScreen;

