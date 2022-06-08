import { StyleSheet, Dimensions, Platform } from "react-native";

const { width: screenWidth} = Dimensions.get("window");


const Styles = StyleSheet.create({
    image:{
        height: 250,
        width: 330,
        borderRadius: 20,
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