import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Home")}><Text>Login</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    color: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
