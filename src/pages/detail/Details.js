import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Details = ({ navigation }) => {
  return (
    <View style={styled.container}>
      <Text>Detail</Text>
    </View>
  )
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Details
