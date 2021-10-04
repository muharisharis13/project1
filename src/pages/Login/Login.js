import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Dimensions, Pressable } from 'react-native'


const { width, height } = Dimensions.get("window")

export default function Login({ navigation }) {
  const [isFocus, setIsfocused] = useState({
    phone_number: false,
    password: false
  })

  const focus = (type) => {
    switch (type) {
      case "phone_number":
        setIsfocused({ ...isFocus, phone_number: true })
        break;
      case "password":
        setIsfocused({ ...isFocus, password: true })
        break;
    }
  }
  const blur = (type) => {
    switch (type) {
      case "phone_number":
        setIsfocused({ ...isFocus, phone_number: false })
        break;
      case "password":
        setIsfocused({ ...isFocus, password: false })
        break;
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container} >
        <View style={styles.ContainerInput}>
          <View style={{ marginBottom: 30 }}>
            <Text>Phone Number</Text>
            <TextInput placeholder="phone number" style={styles.input(isFocus.phone_number === true ? true : false)}
              placeholderTextColor="#cccccc" keyboardType='numeric' onFocus={() => focus("phone_number")} onBlur={() => blur("phone_number")} />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text>Password</Text>
            <TextInput placeholder="phone number" style={styles.input(isFocus.password === true ? true : false)}
              placeholderTextColor="#cccccc" secureTextEntry={true} onFocus={() => focus("password")} onBlur={() => blur("password")} autoCapitalize='none' />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Pressable style={styles.buttonLogin} onPress={() => navigation.replace("Home")}>
              <Text style={styles.TextLogin}>Login</Text>
            </Pressable>
          </View>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  TextLogin: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600"
  },
  buttonLogin: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    borderColor: "#000"
  },
  input: isFocus1 => ({
    borderWidth: 1,
    height: 45,
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#000",
    borderColor: isFocus1 ? "#000" : "#cccccc",

  }),
  ContainerInput: {
    backgroundColor: "#ececec",
    width: width,
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 50,
    // flex: 0.5
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
    marginBottom: "10%"
  }
})
