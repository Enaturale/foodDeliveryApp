import React from 'react';
import Dashboard from './src/screens/Dashboard/Dashboard';
import Order from './src/screens/Order/Order';

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen () {
  return(
      <Stack.Navigator>
          <Stack.Screen name="Homescreen" component={Dashboard} options={{headerShown: "false"}} />
          <Stack.Screen name="Order" component={Order} options={{headerShown: "false"}} />
      </Stack.Navigator>
  )
}

function CartStackScreen () {
    return(
        <Stack.Navigator>
            <Stack.Screen name="CartPage" component={Order} options={{headerShown: "false"}} />
            <Stack.Screen name="Home Page" component={Dashboard} options={{headerShown: "false"}} />
        </Stack.Navigator>
    )     
}

export function Navigation () {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Dashboard} options={{headerShown: "false"}} />
            <Tab.Screen name="Cart" component={Order} options={{headerShown: "false"}} />
        </Tab.Navigator>

    )
}