import React, { useState } from "react";

import { View, Text, Pressable, SafeAreaView, ScrollView } from "react-native";
import Menu from "react-native-vector-icons/MaterialIcons";
import Close from "react-native-vector-icons/MaterialIcons";
import Favorite from "react-native-vector-icons/MaterialIcons";
import Food from "react-native-vector-icons/MaterialIcons";
import Category from "react-native-vector-icons/MaterialIcons";
import ShoppingCart from "react-native-vector-icons/MaterialIcons";

import Styles from "./Styles";

import Searchbar from "../../components/SearchBar/Searchbar";


const Dashboard = ({ navigation }) => {
    const gotoHomescreen = () => {
        navigation.navigate("Home");
    }
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    return (
        <ScrollView>
            <View style={Styles.mainContainer}>
                <View style={Styles.headerContainer}>
                    <View>
                        <Menu name="menu" size={33} color="#F4BA19" />
                    </View>
                    <View>
                        <Text style={Styles.title}>Our Kitchen</Text>
                    </View>
                    <View>
                        <ShoppingCart name="shopping-cart" size={33} color="#F4BA19" style={{ marginLeft: 54, }} />
                    </View>
                </View>

                {/* Search bar */}
                <View>
                    <Searchbar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}
                    />
                </View>

            </View>

            <View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={Styles.otherTitles}>Top Categories</Text>
                    <Category name="category" color="#D33115" size={20} style={{ marginTop: 3 }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={Styles.otherTitles} >New Dishes</Text>
                    {/* <Pressable onPress={gotoHomescreen}> */}
                    <Food name="fastfood" color="#388E3C" size={20} style={{ marginTop: 3 }} />
                    {/* </Pressable> */}
                </View>
            </View>



        </ScrollView>
    )
}

export default Dashboard;