import { StyleSheet, Dimensions, Platform } from "react-native";

const { width: screenWidth} = Dimensions.get("window");


const Styles = StyleSheet.create({
    image:{
        height: 170,
      
        borderRadius: 20,
        width: 350,
       
       
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
    },
    buyNowButton: {
        width: 150, 
        height: 45, 
        backgroundColor:'black', 
        borderRadius:7,  
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 20,
        
    }
})

export default Styles;