import React from "react";
import {Pressable, Text, StyleSheet} from 'react-native';

interface ButtonProps{
    text: string;
    onPress: () => void;
}

const  Button = ({text, onPress}: ButtonProps) => {
    return(
        <Pressable onPress={onPress} style={styles.pressable}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>

    )

};

const styles = StyleSheet.create({
    pressable:{
        backgroundColor: '#e49611',
        paddingHorizontal: 10,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#e4988',
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'black',

    }

})

export default Button;