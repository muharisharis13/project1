import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from '../Admin/history/History';
const Tab = createBottomTabNavigator();
import Setting from '../Admin/setting/Setting';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import ProductList from '../Admin/ProductList/ProductList';
import DashboardSuperAdmin from "../SuperAdmin/Dashboard"
import ListProduct from '../SuperAdmin/Product';

const { width, height } = Dimensions.get("window")


const data = [
  {
    name: "Produk",
    component: ProductList,
    iconName: "home"
  },
  {
    name: "History",
    component: History,
    iconName: "tasks"
  },
  {
    name: "Setting",
    component: Setting,
    iconName: "gear"
  },
]

const dataSuperAdmin = [
  {
    name: "Dashboard",
    component: DashboardSuperAdmin,
    iconName: "home"
  },
  {
    name: "History",
    component: History,
    iconName: "tasks"
  },
  {
    name: "List Product",
    component: ListProduct,
    iconName: "list-ul"
  },
  {
    name: "Setting",
    component: Setting,
    iconName: "gear"
  },
]

const Home = ({ navigation, route }) => {

  const { phone_number } = route.params

  useEffect(() => {
    if (phone_number >= 3) {
      return navigation.replace("Login")
    }
  }, [])

  if (parseInt(phone_number) === 1) {
    return (
      <Tab.Navigator
        screenOptions={({ navigation, route }) => {
          if (route.name === "Setting" && navigation.isFocused()) {
            return ({
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: { position: 'absolute', bottom: 30, width: "95%", marginHorizontal: "2.5%", height: 70, borderRadius: 50, borderWidth: 0, opacity: 0 },
            })
          }
          else {
            return ({
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: { position: 'absolute', bottom: 30, width: "95%", marginHorizontal: "2.5%", height: 70, borderRadius: 50, borderWidth: 0, opacity: 1 },
            })
          }
        }}
      >


        {
          dataSuperAdmin.map((item, index) => (
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
                ),
                headerStyle: {
                  backgroundColor: "red"
                }


              }}
              key={index}
            />

          ))
        }

      </Tab.Navigator>

    )
  }
  else if (parseInt(phone_number) === 2) {
    return (
      <Tab.Navigator
        screenOptions={({ navigation, route }) => {
          if (route.name === "Setting" && navigation.isFocused()) {
            return ({
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: { position: 'absolute', bottom: 30, width: "95%", marginHorizontal: "2.5%", height: 70, borderRadius: 50, borderWidth: 0, opacity: 0 },
            })
          }
          else {
            return ({
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: { position: 'absolute', bottom: 30, width: "95%", marginHorizontal: "2.5%", height: 70, borderRadius: 50, borderWidth: 0, opacity: 1 },
            })
          }
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
                ),
                headerStyle: {
                  backgroundColor: "red"
                }


              }}
              key={index}
            />

          ))
        }

      </Tab.Navigator>

    )
  }
  else {
    return <View>
      <Text>Nothing Here</Text>
    </View>
  }


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
