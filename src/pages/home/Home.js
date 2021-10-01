import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '../detail/Details';
const Tab = createBottomTabNavigator();
import Setting from '../setting/Setting';

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FDetailseed" component={Details} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  )
}

export default Home
