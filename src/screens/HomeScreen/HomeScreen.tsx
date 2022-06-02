import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";


const HomeScreen = ({navigation}) => {
    
    return(
        <View style={Styles.container}>
            <View>
               <Text style={Styles.title}>Home Screen</Text>
            </View>
            
        </View>
    )
}

export default HomeScreen;

