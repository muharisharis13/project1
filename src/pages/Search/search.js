import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Search = () => {
  return (
    <View style={styled.container}>
      <TextInput placeholder="search" style={styled.inputText} />
    </View>
  )
}

const styled = StyleSheet.create({
  inputText: {
    backgroundColor: "#D6D6D6",
    padding: 10,
    height: 40,
    borderRadius: 10,
    color: "#000"
  },
  container: {
    flex: 1,
    padding: 10
  }
})

export default Search
