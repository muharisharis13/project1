import React from 'react'
import { StyleSheet, Text, View, Dimensions, Pressable, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'


const { width, height } = Dimensions.get("window")

const dataMenu = [1, 2, 3]

export default function Setting({ navigation }) {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={40} />
        </Pressable>
        <View style={styles.TitleHeader}>
          <Text style={styles.TextHeader}>Settings</Text>
        </View>
      </View>

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ContainerProfile}>
            <View style={styles.Profile}>
              <Text style={styles.TextProfile}>M</Text>
            </View>
            <View style={{ marginVertical: 7, alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.TextNama}>Muharis</Text>
              <Text >Karyawan</Text>
            </View>
          </View>

          <View style={styles.ContainerMenu}>
            <Pressable style={styles.containerTextMenu} onPress={() => navigation.replace("Login")}>
              <IonIcon name="log-out-outline" size={30} style={{ marginRight: 10 }} />
              <Text style={styles.TextMenu}>Log Out</Text>
            </Pressable>
          </View>

        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ContainerMenu: {
    marginTop: 20
  },
  TextMenu: {
    fontSize: 17,
    fontWeight: "600"
  },
  containerTextMenu: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  TextNama: {
    fontWeight: "500",
    fontSize: 25
  },
  TextProfile: {
    fontWeight: "800",
    fontSize: 50,
    color: "#fff"
  },
  Profile: {
    backgroundColor: "pink",
    flexDirection: "row",
    paddingHorizontal: width / 10,
    paddingVertical: width / 14,
    borderRadius: 100

  },
  ContainerProfile: {
    marginTop: height / 20,
    alignItems: 'center'
  },
  TextHeader: {
    fontWeight: "600",
    fontSize: 20,

  },
  TitleHeader: {
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "#fff",
    height: height / 10,
    paddingTop: 30,
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10
    // marginBottom: 100
  }
})
