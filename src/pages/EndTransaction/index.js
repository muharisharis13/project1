import React, { useContext } from 'react'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Context } from '../../context'

const { width, height } = Dimensions.get("window")

const data = [
  { nama: "" },
  { nama: "" },
  { nama: "" },
]
const EndTransaction = ({ navigation }) => {
  const { dispatch } = useContext(Context)
  return (
    <ScrollView onScroll={event => dispatch({ type: "SCROLL", scroll: event.nativeEvent.contentOffset.y })}>
      <View style={styles.container}>
        <Text style={styles.title}>Transaction</Text>

        <View style={styles.containerCard} >
          <View style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.TitleCard}>Transaction Success</Text>
            <Text>12 July 2021 - 10:50</Text>
            <Text>ID : 12314324234</Text>

          </View>

          <View style={{ marginBottom: 80 }}>
            {
              data.map((item, index) => (
                <View style={styles.containerContent} key={index}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: "600", fontSize: 18 }}>Kopi O</Text>
                    <Text style={styles.TextPrice}>Rp. 6,000</Text>
                  </View>
                  <View style={styles.contentright}>
                    <TextInput value="1" style={styles.InputQty} maxLength={1} editable={false} />
                  </View>
                </View>

              ))
            }
          </View>

          <View style={styles.containerContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.TextPrice}>Total</Text>
            </View>
            <View style={styles.TextPrice}>
              <Text>Rp. 20.000</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btnPayment} onPress={() => navigation.replace("Home")}>
            <Text style={styles.TextPayment}> Back To Home</Text>
          </TouchableOpacity>
        </View>


      </View>

    </ScrollView>
  )
}

export default EndTransaction

const styles = StyleSheet.create({
  TextPayment: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600"
  },
  btnPayment: {
    backgroundColor: "#000",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10
  },
  btnPlusMinus: {
    borderColor: "#000",
    borderWidth: 1,
    padding: 0,
    borderRadius: 100,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 25
  },
  TextPrice: {
    fontSize: 18
  },
  TitleCard: {
    fontWeight: "800",
    fontSize: 23,
    textAlign: "center"
  },
  InputQty: { color: "black", backgroundColor: "#F2F2F2", textAlign: "center", alignItems: "center", justifyContent: "center", borderRadius: 5, marginHorizontal: 20, maxHeight: 30, padding: 0 },
  contentright: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "blue"
  },
  containerContent: {
    flexDirection: "row",
    // backgroundColor: "red",
    marginTop: width / 20,
    alignItems: "center"
  },
  containerCard: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    marginVertical: 10
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    marginTop: 10,
    marginBottom: 20
  },
  container: {
    marginVertical: 30,
    paddingLeft: 10,
    paddingRight: 10
  }
})
