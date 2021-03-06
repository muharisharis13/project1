import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Search = () => {
  return (
    <View style={styled.container}>
      <TextInput placeholder="search" style={styled.inputText} placeholderTextColor="#ececec" />
    </View>
  )
}

const styled = StyleSheet.create({
  inputText: {
    backgroundColor: "#D6D6D6",
    padding: 10,
    height: 45,
    borderRadius: 10,
    color: "#000"
  },
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20
  }
})

export default Search
