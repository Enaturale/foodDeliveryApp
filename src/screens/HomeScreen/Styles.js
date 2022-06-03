import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:'#000000',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title:{
        color:'white',
        fontSize:30,
        fontFamily:'PlayfairDisplay-Medium',
    },
    subtitle:{
        color: 'white',
        fontSize: 20,
        fontFamily:'Nunito-Light',

    },
    pressableText:{
        fontSize: 30,
        color: 'black',
        paddingHorizontal: 30,
        fontFamily: 'Nunito-Bold'
    },
    pressable:{
        backgroundColor:'#F4BA19',
        width: 300,
        height: 50,
        marginVertical: 10,
        borderRadius: 5,

    }

}); 

export default Styles;