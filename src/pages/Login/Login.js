import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Dimensions, Pressable, StatusBar } from 'react-native'
import { methodPost } from '../../service/methodApi'

const { width, height } = Dimensions.get("window")

export default function Login({ navigation }) {
  const [isFocus, setIsfocused] = useState({
    phone_number: false,
    password: false
  })
  const [phone_number, setPhone_number] = useState(0)
  const [password, setPassword] = useState("")

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


  const btnLogin = () => {
    methodPost({
      endpoint: "/login", data: {
        phone_number: `0${phone_number}`,
        password: password,
      }
    })
      .then(async res => {

        if (res.success) {
          console.log(res)


        }
      })
  }




  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent" barStyle="dark-content" translucent={true} />
        <View style={styles.ContainerInput}>
          <View style={{ marginBottom: 30 }}>
            <Text>Phone Number</Text>
            <TextInput placeholder="phone number" style={styles.input(isFocus.phone_number === true ? true : false)}
            placeholderTextColor="#cccccc" keyboardType='numeric' onFocus={() => focus("phone_number")} onBlur={() => blur("phone_number")} value={phone_number} onChangeText={(e) => setPhone_number(parseInt(e))} />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text>Password</Text>
            <TextInput placeholder="phone number" style={styles.input(isFocus.password === true ? true : false)}
              placeholderTextColor="#cccccc" secureTextEntry={true} onFocus={() => focus("password")} onBlur={() => blur("password")} autoCapitalize='none' value={password} onChangeText={(e) => setPassword(e)} />
          </View>
          <View style={{ marginBottom: 30 }}>
          <Pressable style={styles.buttonLogin} onPress={() => btnLogin()}>
            {/* <Pressable style={styles.buttonLogin} onPress={() => navigation.replace("Home", { phone_number: phone_number })}> */}
              <Text style={styles.TextLogin}>Login</Text>
            </Pressable>
          </View>
      </View>
    </SafeAreaView>
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
  }
})
