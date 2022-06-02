import React from "react";
import {ScrollView, View, Text, StyleSheet} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={HomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>      
    </NavigationContainer>

  )
}

export default App; 