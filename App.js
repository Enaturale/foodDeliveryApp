import React from "react";
import {ScrollView, View, Text, StyleSheet} from "react-native";
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Dashboard from "./src/screens/Dashboard/Dashboard";
import { Navigation } from "./Naviagtor";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name ="Dashboard" component={Navigation} options={{headerShown:false}} />
      </Stack.Navigator>      
    </NavigationContainer>

  )
}

export default App; 