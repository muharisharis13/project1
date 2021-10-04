import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '../detail/Details';
const Tab = createBottomTabNavigator();
import Setting from '../setting/Setting';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import ProductList from '../ProductList/ProductList';

const { width, height } = Dimensions.get("window")


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
        tabBarStyle: { position: 'absolute', bottom: 30, width: "95%", marginHorizontal: "2.5%", height: 70, borderRadius: 50, borderWidth: 0 },
      }}
    >


      {
        data.map((item, index) => (
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
                  {
                    focused ?
                      <Text style={{ color: focused ? "#000" : "#8e8e93", fontSize: 10 }}>{item.name}</Text>
                      : null
                  }

                </View>
              )
            }}
            key={index}
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
    textAlign: "center",
    flex: 1,
    width: width / 2,
  }
})

export default Home
