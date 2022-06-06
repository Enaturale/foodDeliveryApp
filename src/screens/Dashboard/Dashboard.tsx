import React from "react";

import { View, Text, Pressable, SafeAreaView, ScrollView } from "react-native";
import Menu from "react-native-vector-icons/MaterialIcons";
import Close from "react-native-vector-icons/MaterialIcons";
import Styles from "./Styles";


const Dashboard = () => {
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
                    <Close  name="close" size={33} color="#F4BA19" style={{marginLeft: 96,}}/>
                </View>
            </View>

            </View>

            <View>
                <Text>Top Favourites</Text>
            </View>

            <View>
                <Text>Latest Dishes</Text>
            </View>
            
        </ScrollView>
    )
}

export default Dashboard;