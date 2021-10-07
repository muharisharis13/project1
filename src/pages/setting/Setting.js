import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Setting({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    // marginBottom: 100
  }
})
