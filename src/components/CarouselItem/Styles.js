import { StyleSheet, Dimensions, Platform } from "react-native";

const { width: screenWidth} = Dimensions.get("window");


const Styles = StyleSheet.create({
    mainContainer:{
        paddingTop: 20,
    },
    item:{
        width: '100%',
        height: screenWidth + 20,
        //backgroundColor: '#1B4E89',
        //alignItems: 'flex-start',
        //justifyContent:'flex-start',
        borderRadius: 20,
    },
    imageContainer:{
        flex: 3,
       // borderRadius: 5,
        backgroundColor: '#e3e3e3',
        marginBottom: Platform.select({ios:0, android:1}),
        marginTop: 15,
        //marginLeft: 85,
    },
    image:{
        ...StyleSheet.absoluteFillObject,
        resizeMode:'cover',
        height: '100%',
    },
    dotContainer:{
        // backgroundColor:'#D9D9D9',
     },
     dotStyle:{
         width: 10,
         height: 10,
         borderRadius: 5,
         backgroundColor:'#004D40',
     },
     inactiveDotStyle:{
         backgroundColor:'#009688',
     },
    

})

export default Styles;