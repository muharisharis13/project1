import React, { useContext, useState, useRef } from 'react'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Context } from '../../../context/index'
import SheetEdit from './sheet.edit'
import RBSheet from "react-native-raw-bottom-sheet";

const { width, height } = Dimensions.get("window")

const data = [
  { nama: "1" },
  { nama: "2" },
  { nama: "3" },
  { nama: "4" },
  { nama: "5" },
  { nama: "6" },
  { nama: "7" },
  { nama: "8" },
  { nama: "9" },
  { nama: "10" },
]
const ListTransaction = ({ navigation }) => {
  const { dispatch } = useContext(Context)
  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)
  const refRBSheet = useRef();

  const openSheetEdit = (index) => {
    refRBSheet.current.open()
    setIndex(index)
  }

  return (
    <View style={styles.container}>
      <ScrollView onScroll={event => dispatch({ type: "SCROLL", scroll: event.nativeEvent.contentOffset.y })}>
        <Text style={styles.title}>List Transaction</Text>

        <View style={styles.containerCard} >
          <Text style={styles.TitleCard}>List Product</Text>
          {
            data.map((item, index) => (
              <View style={styles.containerContent} key={index}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "600", fontSize: 18 }}>Kopi O</Text>
                  <Text style={styles.TextPrice}>Rp. 6,000</Text>
                </View>
                <View >
                  <TextInput value="1" style={styles.InputQty} editable={false} />
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>
                  <Pressable style={styles.buttonEdit} onPress={() => openSheetEdit(index)}>
                    <Text style={styles.textEdit}>Edit</Text>
                  </Pressable>
                </View>
              </View>

            ))
          }
          <SheetEdit refRBSheet={refRBSheet} data={data[index]} />
        </View>

        <View style={styles.containerCard} >
          <Text style={styles.TitleCard}>Order Summary</Text>

          <View >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.TextPrice}>Total</Text>
              </View>
              <View style={styles.TextPrice}>
                <Text>Rp. 20.000</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.TextPrice}>Yang Di Bayar</Text>
              </View>
              <View style={styles.TextPrice}>
                <Text>Rp. 20.000</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.TextPrice}>Kembalian</Text>
              </View>
              <View style={styles.TextPrice}>
                <Text>Rp. 20.000</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput placeholder="Bayar" style={styles.inputText} placeholderTextColor="#cccc" keyboardType="numeric" />
          </View>

          <TouchableOpacity style={styles.btnPayment} onPress={() => navigation.navigate("EndTransaction")}>
            <Text style={styles.TextPayment}> Payment</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View >
  )
}

export default ListTransaction

const styles = StyleSheet.create({

  inputText: {
    backgroundColor: "transparent",
    padding: 10,
    height: 40,
    borderRadius: 5,
    color: "#000",
    borderWidth: 1,
    borderColor: "#ccc"
  },
  InputQty: { color: "black", backgroundColor: "#F2F2F2", textAlign: "center", alignItems: "center", justifyContent: "center", borderRadius: 5, marginHorizontal: 20, maxHeight: 30, padding: 0 },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textEdit: {
    color: "#fff"
  },
  buttonEdit: {
    borderWidth: 1,
    padding: 7,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#000",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "70%"
  },
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
    fontSize: 15
  },
  TitleCard: {
    fontWeight: "800",
    fontSize: 23
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
    alignItems: "center",
    justifyContent: "space-between"
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
    // marginVertical: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30
  }
})
