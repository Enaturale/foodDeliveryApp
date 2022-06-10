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

    },
    pressableCategory:{
        marginHorizontal: 20,
        borderWidth: 1,
        width: 100,
        borderRadius: 10,
        height: 40,
        backgroundColor:'#040A07', 
        justifyContent:'center',
        alignItems:'center',
    },
    pressableText:{
        fontSize: 20,
        fontFamily: 'Nunito-Bold',
        color:'#F4BA19',   
        marginHorizontal: 7,    
    },

    //styling the image after the top categories are created
    image:{
        height: 250,
        width: 300,
        borderRadius: 20,
    },
    imageTitle:{
        fontSize: 20, 
        fontFamily: 'Nunito-Bold', 
        
    },
    imageAmount:{
        fontSize: 18,
    },
    slider:{
       
    }

})

export default Styles;