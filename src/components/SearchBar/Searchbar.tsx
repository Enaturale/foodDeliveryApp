import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from "react-native";
import Search from "react-native-vector-icons/MaterialIcons";
import Close from "react-native-vector-icons/MaterialIcons";

const Searchbar = ({searchPhrase, setSearchPhrase, clicked, setClicked}) => {
    return (
        <View style={styles.container}>
            <View
              style={
                  clicked 
                  ? styles.searchbarClicked
                  : styles.searchbarUnclicked
              }
            >
                <Search name="search" color="#F4BA19" size={25} />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => setClicked(true)}
                />
                {clicked && (<Close name="close" size={20} color="#F4BA19" 
                   onPress={() => {Keyboard.dismiss(); setSearchPhrase(""); setClicked(false)}}/>
                   )}
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        height: 58,
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '90%',        
    },
    searchbarClicked: {
        padding: 10,
        flexDirection: 'row',
        width: '80%',
        backgroundColor: "#F1F1F1",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    searchbarUnclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#F1F1F1",
        borderRadius: 15,
        alignItems: "center",

    },
})

export default Searchbar;