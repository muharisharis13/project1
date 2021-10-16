import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'

const SplashScreen = ({ navigation }) => {


  useEffect(() => {
    setTimeout(() => navigation.replace("Login"), 3000)
  })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent" barStyle="dark-content" translucent={true} />
      <Text style={styles.Title}>Toko Mak Ares</Text>
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  Title: {
    fontWeight: "900",
    fontSize: 40
  },
  container: {
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
})
