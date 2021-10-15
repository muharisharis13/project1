import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const LoadingApp = () => {
  return (
    <View style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="transparent" barStyle="dark-content" translucent={true} />
      <Text>Loading</Text>
    </View>
  )
}

export default LoadingApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
})
