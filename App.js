import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/home/Home';
import Search from "./src/pages/Search/search"
import Login from './src/pages/Login/Login';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" screenOptions={{
//         headerShown: false
//       }}>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Details" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

export default App
