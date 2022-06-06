import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    mainContainer:{
        height: 100,
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    headerContainer:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    title:{
        fontSize: 30,
        //fontWeight: 'bold',
        marginHorizontal: 50,
        color: '#F4BA19',
        fontFamily: 'Nunito-ExtraBoldItalic',     
        
    },
    otherTitles:{
        fontSize: 23,
        marginStart: 20,
        marginEnd: 10,
        color: "#000000",
        fontFamily: 'Nunito-BoldItalic',  

    }
})

export default Styles;