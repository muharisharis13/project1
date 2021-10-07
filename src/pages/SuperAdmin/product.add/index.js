import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
const { width, height } = Dimensions.get("window")
import Icon from 'react-native-vector-icons/FontAwesome5'
import { inputCurrency } from '../../../utl/format-currency'

const AddProduct = ({ refRBSheet }) => {
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
      <Text style={styles.Title}>Add Product</Text>
      <ScrollView style={styles.container}>
        <View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.labelInput}>Kode Produk</Text>
            <TextInput style={styles.TextInputStyle} placeholder="Kode Produk" placeholderTextColor="#ccc" />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.labelInput}>Nama Produk</Text>
            <TextInput style={styles.TextInputStyle} placeholder="Nama Produk" placeholderTextColor="#ccc" />
          </View>
          <View style={{ marginBottom: 20, flexDirection: "row" }}>
            <View style={{ flex: 1, marginHorizontal: 2.5 }}>
              <Text style={styles.labelInput}>Stok Awal</Text>
              <TextInput style={styles.TextInputStyle} placeholder="Stok" placeholderTextColor="#ccc" keyboardType="numeric" />
            </View>
            <View style={{ flex: 1, marginHorizontal: 2.5 }}>
              <Text style={styles.labelInput}>Satuan</Text>
              <TextInput style={styles.TextInputStyle} placeholder="Cth : pcs / lusin" placeholderTextColor="#ccc" keyboardType="numeric" />
            </View>
          </View>

        </View>
        <View>
          <Pressable style={styles.btnSimpan}>
            <Text style={styles.TextSimpan}>Simpan</Text>
          </Pressable>
        </View>
      </ScrollView>

    </RBSheet >
  )
}

export default AddProduct

const styles = StyleSheet.create({
  TextSimpan: {
    color: "#fff",
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: 17
  },
  btnSimpan: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 7
  },
  Title: {
    fontWeight: "900", fontSize: 20, marginBottom: 30
  },
  labelInput: {
    fontWeight: "600",
    marginBottom: 5
  },
  TextInputStyle: {
    color: "#000",
    borderWidth: 1,
    borderColor: "#ececec",
    width: "100%",
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  container: {
    flex: 1
  }
})
