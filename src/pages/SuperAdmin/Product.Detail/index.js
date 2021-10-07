import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
const { width, height } = Dimensions.get("window")
import Icon from 'react-native-vector-icons/FontAwesome5'
import { inputCurrency } from '../../../utl/format-currency'

const DetailProduct = ({ refRBSheet, data }) => {
  return (
    <RBSheet
      ref={refRBSheet}
      animationType="fade"
      closeOnDragDown={true}
      closeOnPressMask={true}
      dragFromTopOnly={false}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        draggableIcon: {
          backgroundColor: "#cecece"
        },
        container: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 3,
          paddingHorizontal: 20
        }
      }}
      height={height / 1.5}
      openDuration={400}
    >
      <View style={styles.container}>

        <View style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
          <Text style={{ fontWeight: "600", fontSize: 20 }}>
            Kopi O
          </Text>
          <Text>
            Tshirt01
          </Text>
          <Text style={{ marginVertical: 20 }}>
            Sisa : 100 / pcs
          </Text>
        </View>

        <View style={styles.ContainerQty}>
          <Pressable style={styles.BtnQty}>
            <Icon name="minus" size={20} color="#fff" />
          </Pressable>
          <View style={styles.textQty}>
            <Text>1</Text>
          </View>
          <Pressable style={styles.BtnQty}>
            <Icon name="plus" size={20} color="#fff" />
          </Pressable>
        </View>


        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity style={styles.ButtonSimpan}>
            <Text style={styles.textEdit}>Update</Text>
          </TouchableOpacity>
        </View>


      </View>

    </RBSheet >
  )
}

export default DetailProduct

const styles = StyleSheet.create({

  textEdit: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    textTransform: "uppercase"
  },
  ButtonSimpan: {
    borderWidth: 1,
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#000",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textQty: {
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 0,
    height: 30,
    width: 30,
    borderRadius: 5
  },

  BtnQty: {
    borderWidth: 1,
    borderRadius: 100,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 0,
    backgroundColor: "#000",
    marginHorizontal: 20
  },
  ContainerQty: { textAlign: 'center', justifyContent: "center", alignItems: "center", marginBottom: 20, flexDirection: "row" },
  InputHarga: {
    color: "#000",
    borderWidth: 1,
    borderColor: "#ececec",
    width: "100%",
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  container: {
    flex: 1
  }
})
