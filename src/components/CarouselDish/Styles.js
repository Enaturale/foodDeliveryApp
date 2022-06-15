import { StyleSheet, Dimensions, Platform } from "react-native";

const { width: screenWidth} = Dimensions.get("window");


const Styles = StyleSheet.create({
    image:{
        height: 200,
        width: 350,
        borderRadius: 20,
        //resizeMode:'contain'
    },
    imageTitle:{
        fontSize: 21, 
        fontFamily: 'Nunito-Bold', 
        marginLeft: 20, 
        color:'black',       
    },
    imageAmount:{
        fontSize: 19,
        fontFamily:"Nunito-BoldItalic"
    }
})

export default Styles;