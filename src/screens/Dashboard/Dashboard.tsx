import React from "react";

import { View, Text, Pressable, SafeAreaView, ScrollView } from "react-native";
import Menu from "react-native-vector-icons/MaterialIcons";
import Close from "react-native-vector-icons/MaterialIcons";
import Favorite from "react-native-vector-icons/MaterialIcons";
import Food from "react-native-vector-icons/MaterialIcons";

import Styles from "./Styles";


const Dashboard = ({navigation}) => {
    const gotoHomescreen = () => {
        navigation.navigate("Home");
    }
    return (
        <ScrollView>
            <View style={Styles.mainContainer}>
            <View style={Styles.headerContainer}>
                <View>
                    <Menu name="menu" size={33} color="#F4BA19" />
                </View>
                <View>
                    <Text style={Styles.title}>Welcome</Text>
                </View>
                <View>
                    <Close name="close" size={33} color="#F4BA19" style={{marginLeft: 96,}}/>
                </View>
            </View>

            </View>

            <View>
            <View style={{flexDirection:'row', marginTop:20,}}>
                <Text style={Styles.otherTitles}>Top Favourites</Text>
                <Favorite name="favorite" color="#D33115" size={30} />
            </View>

            <View style={{flexDirection:'row', marginTop:20,}}>
                <Text style={Styles.otherTitles} >Latest Dishes</Text>
                <Food name="fastfood" color="#388E3C" size={30} onPress={gotoHomescreen} />
            </View>
                

            </View>

            
            
        </ScrollView>
    )
}

export default Dashboard;