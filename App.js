import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/home/Home';
import Search from "./src/pages/Admin/Search/search"
import Login from './src/pages/Login/Login';
const Stack = createNativeStackNavigator();
import { Store } from './src/context/index'
import ListTransaction from './src/pages/Admin//listTransaction';
import EndTransaction from './src/pages/Admin//EndTransaction';
import HistorySeeDetail from './src/pages/Admin/history/History.seedetail';



const App = () => {
  return (
    <NavigationContainer >
      <Store>

        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="ListTransaction" component={ListTransaction} />
          <Stack.Screen name="EndTransaction" component={EndTransaction} />
          <Stack.Screen name="HistorySeeDetail" component={HistorySeeDetail} />
        </Stack.Navigator>

      </Store>
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
