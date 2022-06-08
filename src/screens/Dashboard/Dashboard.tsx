import React, { useState } from "react";

import { View, Text, Pressable, SafeAreaView, ScrollView, Image } from "react-native";
import Menu from "react-native-vector-icons/MaterialIcons";
import Close from "react-native-vector-icons/MaterialIcons";
import Favorite from "react-native-vector-icons/MaterialIcons";
import Food from "react-native-vector-icons/MaterialIcons";
import Category from "react-native-vector-icons/MaterialIcons";
import ShoppingCart from "react-native-vector-icons/MaterialIcons";

import Styles from "./Styles";

import Searchbar from "../../components/SearchBar/Searchbar";
import Section from "../../components/Section/Section";

import Dishdata from "../../data/Dish";
import CustomSlider from "../../components/CarouselDish/CustomSlider";
import DishesData from "../../data/Dishes";



const Dashboard = ({ navigation }) => {

    const gotoDishPage = () => {
        navigation.navigate("Top Dishes")
    }

    const gotoOrderPage = () => {
        navigation.navigate("Your Orders")
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
                        <Pressable onPress={gotoOrderPage}>                            
                         <ShoppingCart 
                            name="shopping-cart" 
                            size={33} 
                            color="#F4BA19" 
                            style={{ marginLeft: 54, }}
                            />
                        </Pressable>
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

            {/* recommended section */}
            <View>
                <Section />
            </View>

            {/* categories section */}
            <View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={Styles.otherTitles}>Top Categories</Text>
                    <Category name="category" color="#D33115" size={20} style={{ marginTop: 3 }} />
                    <Pressable>
                        <Text style={{ marginHorizontal: 150, fontSize: 16, marginVertical: 2 }}>View All</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20,}}>
                    <Pressable style={Styles.pressableCategory}>
                        <Text style={Styles.pressableText}>Drinks</Text>
                    </Pressable>
                    <Pressable style={Styles.pressableCategory}>
                        <Text style={Styles.pressableText}>Foods</Text>
                    </Pressable>
                    <Pressable style={Styles.pressableCategory}>
                        <Text style={Styles.pressableText}>Receipes</Text>
                    </Pressable>
                </View>


               {/* Dishes  Section */}
                <View style={{ flexDirection: 'row', marginTop: 25, }}>
                    <Text style={Styles.otherTitles} >New Dishes</Text>
                  
                    <Food name="fastfood" color="#388E3C" size={20} style={{ marginTop: 3 }} />
                    
                    <Pressable onPress={gotoDishPage}>
                        <Text style={{ marginHorizontal: 180, fontSize: 16, marginVertical: 2 }}>View All</Text>
                    </Pressable>

                </View>

                {/* Showing the dishes */}               
                {/* <View style={{alignContent:'center', justifyContent:'center'}}>
                    <Pressable>
                        <View style={{marginHorizontal: 20, marginVertical: 20, }}>
                            <Image source={{uri: Dishdata.image}} style={Styles.image}/>
                            <View style={{flexDirection: 'row', justifyContent:'space-between', width: 280, marginVertical: 5,}}>
                            <Text style={Styles.imageTitle}>{Dishdata.title}</Text>
                            <Text style={Styles.imageAmount}>${Dishdata.amount}</Text>
                            </View>
                            
                        </View>
                    </Pressable>

                </View> */}

                <CustomSlider dishes={DishesData} />

            </View>



        </ScrollView>
    )
}

export default Dashboard;