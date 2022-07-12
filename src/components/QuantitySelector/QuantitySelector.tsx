import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'

const QuantitySelector = ({quantity, setquantity}) => {
    const onPlus = () =>{
        setquantity(Math.max(0, quantity - 1));
    }

    const onMinus = () =>{
        setquantity(quantity + 1);        
    }
    return(
        <View style={Styles.container}>
            <Pressable style={Styles.pressable} onPress={onMinus}>
                <Text style={Styles.pressableText}>-</Text>
            </Pressable>

            <Text  style={Styles.quantity}>{quantity}</Text>

            <Pressable style={Styles.pressable} onPress={onPlus}>
                <Text style={Styles.pressableText}>+</Text>
            </Pressable>
        </View>

    )
}

const Styles = StyleSheet.create({
    container:{
        width: 100,
        borderWidth: 1,
        flexDirection: 'row',
        height: 40,
        borderColor: '#F4BA19',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
        

    },
    pressable:{
        height: 35,
        width: 35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000000'

    },
    pressableText:{
        fontSize: 20,
        color: '#F4BA19',
        fontFamily: "Nunito-Bold",

    },
    quantity:{
        color: '#F4BA19',    
        fontSize: 20,    
        fontFamily: "Nunito-Black",

    }

})

export default QuantitySelector;