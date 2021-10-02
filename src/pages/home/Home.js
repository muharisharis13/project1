import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '../detail/Details';
const Tab = createBottomTabNavigator();
import Setting from '../setting/Setting';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import ProductList from '../ProductList/ProductList';


const data = [
  {
    name: "Produk",
    component: ProductList,
    iconName: "product-hunt"
  },
  {
    name: "Details",
    component: Details,
    iconName: "home"
  },
  {
    name: "Setting",
    component: Setting,
    iconName: "gear"
  },
]

const Home = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

      }}
    >


      {
        data.map(item => (
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.containerIcon}>
                  <Icon2
                    name={item.iconName}
                    size={24}
                    style={{ color: focused ? "#000" : "#8e8e93" }}
                  />

                  <Text style={{ color: focused ? "#000" : "#8e8e93" }}>{item.name}</Text>
                </View>
              )
            }}
          />

        ))
      }

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
})

export default Home
