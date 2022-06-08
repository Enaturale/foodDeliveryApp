import React from 'react';
import Dashboard from './src/screens/Dashboard/Dashboard';
import Order from './src/screens/Order/Order';
import TopDishes from './src/screens/TopDishes/TopDishes';


import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "react-native-vector-icons/MaterialIcons";
import Cart from "react-native-vector-icons/MaterialIcons";

function HomeStackScreen () {
  return(
      <Stack.Navigator>
          <Stack.Screen name="Homescreen" component={Dashboard} options={{headerShown: false}} />
          <Stack.Screen name="Order" component={Order} options={{headerShown: false}} />  
          <Stack.Screen name=" Top Dishes" component={TopDishes} options={{headerShown: false}} />          

      </Stack.Navigator>
  )
}

function CartStackScreen () {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Your Orders" component={Order} options={{}} />
            <Stack.Screen name="Home Page" component={Dashboard} options={{headerShown: false}} />
        </Stack.Navigator>
    )     
}

// function DishesStackScreen () {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen  name= "Dishes" component={Dishes} options={{headerShown: false}}/>
//         </Stack.Navigator>

//     )
// }

export function Navigation () {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: "#F4BA19",
            tabBarStyle:{
                backgroundColor:'#040A07',
                height: 60,                
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
            },
            tabBarLabelStyle:{
                fontSize: 18,
                fontFamily:"Nunito-BoldItalic"
            }
        }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStackScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Home  name="home" color="#F4BA19" size={20} />
                    )
                    }} 
            />
            <Tab.Screen 
                name="Cart" 
                component={CartStackScreen} 
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "#F4BA19",
                    tabBarIcon: () =>(
                        <Cart  name="shopping-cart" color="#F4BA19" size={20} />
                    )
                    }} 
            />
        </Tab.Navigator>

    )
}