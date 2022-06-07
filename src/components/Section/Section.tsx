import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export default function Section(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Recommended for you</Text>
            <View style={{borderBottomColor:'black', borderBottomWidth:1, borderTopRightRadius: 20, borderTopLeftRadius: 20,}}/>
            <Text style={styles.text}>Check Last Order</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        backgroundColor:'white',    
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 10, 
    },
    text:{
        fontSize: 20,
        marginHorizontal: 20,
        color:'black',
        fontFamily:'Nunito-SemiBold',
        marginVertical: 5,
    }
})