import React, { useRef } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AddProduct from '../product.add'
import DetailProduct from '../Product.Detail'

const dataProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const ListProduct = ({ navigation }) => {

  const refRBSheet = useRef();
  const refRBSheetAdd = useRef();

  const openSheetEdit = (index) => {
    refRBSheet.current.open()
  }
  const openSheetAdd = (index) => {
    refRBSheetAdd.current.open()
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.btnCart} onPress={() => openSheetAdd()}>
        <View>
          <Icon name="plus" style={{ fontSize: 25, color: "#fff" }} />
        </View>
      </Pressable>
      <AddProduct refRBSheet={refRBSheetAdd} />
      <ScrollView >

        <View style={{ marginBottom: 100, flexDirection: "row", flexWrap: "wrap" }}>
          {
            dataProduct.map((item, index) => (
              <View style={styles.containerCardProduct} key={index}>
                <Image style={styles.imageCardProduct} source={{ uri: 'https://media.istockphoto.com/photos/coffee-cup-on-white-background-picture-id1273295924?b=1&k=20&m=1273295924&s=170667a&w=0&h=h5tnPmmz4biKjIZiwtzIOHhEfen_53dfEoC3RSSwnUI=' }}
                />

                <View style={styles.containerContentCard}>
                  <Text style={styles.TitleCard}>Lupakan Mantan</Text>

                  <Text style={styles.PriceCard}>Rp. 20,000</Text>
                  <Text>Qty : 200 / pcs</Text>
                  <View style={styles.containerCardButton}>
                    <Pressable onPress={() => openSheetEdit()} style={styles.Btn}>
                      <Text style={styles.BtnText}>Detail</Text>
                    </Pressable>

                  </View>
                </View>
              </View>

            ))
          }
          <DetailProduct refRBSheet={refRBSheet} />

        </View>
      </ScrollView>

    </View>
  )
}

export default ListProduct

const styles = StyleSheet.create({
  TextLengthCart: {
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 100,
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    top: -5,
    right: -5
  },
  btnCart: {
    position: "absolute",
    bottom: 120,
    right: 30,
    zIndex: 99,
    elevation: 99,
    backgroundColor: "#000",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 1
  },
  Btn: {
    backgroundColor: "#000",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  BtnText: {
    color: "#fff",
    fontWeight: "700",
    textTransform: "uppercase"
  },
  containerCardButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },
  PriceCard: {
    fontSize: 15, marginVertical: 5
  },
  TitleCard: {
    fontWeight: "700",
    fontSize: 17,
    marginBottom: 10
  },
  containerContentCard: {
    padding: 12
  },
  imageCardProduct: {
    width: 160,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10

  },
  containerCardProduct: {
    paddingBottom: 10,
    maxWidth: 170,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8
  },
  containerListProduct: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 100
    // justifyContent: "space-between"
  },
  textSearch: {
    color: "#707070",
    fontSize: 18,
    fontWeight: "600"
  },
  Search: {
    height: 45,
    backgroundColor: "#D6D6D6",
    textAlign: "center",
    padding: 10,
    justifyContent: "center",
    borderRadius: 10
  },
  container: {
    marginTop: 30,
    paddingHorizontal: 10,
    position: 'relative'

  }
})
