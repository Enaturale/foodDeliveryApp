import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    mainContainer:{
        height: 150,
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
    },
    headerContainer:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 2,
    },
    title:{
        fontSize: 28,
        //fontWeight: 'bold',
        marginHorizontal: 50,
        color: '#F4BA19',
        fontFamily: 'Nunito-ExtraBoldItalic',     
        
    },
    otherTitles:{
        fontSize: 20,
        marginStart: 20,
        marginEnd: 10,
        color: "#000000",
        fontFamily: 'Nunito-BoldItalic',  

    }
})

export default Styles;