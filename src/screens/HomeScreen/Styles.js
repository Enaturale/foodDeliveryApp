import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:'#000000',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title:{
        color:'white',
        fontSize:35,
        fontFamily:'PlayfairDisplay-ExtraBold',
    },
    subtitle:{
        color: 'white',
        fontSize: 20,
        fontFamily:'Nunito-Regular',
        marginVertical: 3,

    },
    pressableText:{
        fontSize: 25,
        color: 'black',
        paddingHorizontal: 40,
        fontFamily: 'Nunito-ExtraBoldItalic'
    },
    pressable:{
        backgroundColor:'#F4BA19',
        width: 260,
        height: 50,
        marginVertical: 20,
        borderRadius: 5,

    }

}); 

export default Styles;