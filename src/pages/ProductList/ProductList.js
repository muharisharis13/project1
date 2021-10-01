import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import Icon from "react-native-vector-icons/Feather"


const data = [
  {
    img: "",
    title: "",
    price: ""
  },
  {
    img: "",
    title: "",
    price: ""
  },
  {
    img: "",
    title: "",
    price: ""
  },
  {
    img: "",
    title: "",
    price: ""
  },
  {
    img: "",
    title: "",
    price: ""
  },
  {
    img: "",
    title: "",
    price: ""
  },
  {
    img: "",
    title: "",
    price: ""
  },
]

const ProductList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {
        0 > 0 ?
          <TouchableOpacity style={styles.btnCart} onPress={() => navigation.navigate("Search")}>
            <View>
              <Icon name="shopping-bag" style={{ fontSize: 25, color: "#fff" }} />
              <Text style={styles.TextLengthCart}>{data.length}</Text>
            </View>
          </TouchableOpacity>
          : null
      }
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.Search} onPress={() => navigation.navigate("Search")}>
            <Text style={styles.textSearch}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerListProduct}>
          {
            data.map((item, index) => (
              <View style={styles.containerCardProduct} key={index}>
                <Image style={styles.imageCardProduct} source={{ uri: 'https://media.istockphoto.com/photos/coffee-cup-on-white-background-picture-id1273295924?b=1&k=20&m=1273295924&s=170667a&w=0&h=h5tnPmmz4biKjIZiwtzIOHhEfen_53dfEoC3RSSwnUI=' }}
                />

                <View style={styles.containerContentCard}>
                  <Text style={styles.TitleCard}>Lupakan Mantan</Text>

                  <Text style={styles.PriceCard}>Rp. 20000</Text>
                  <View style={styles.containerCardButton}>
                    <TouchableOpacity style={styles.Btn}>
                      <Text style={styles.BtnText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Btn}>
                      <Text style={styles.BtnText}>Detail</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

            ))
          }
        </View>

      </ScrollView>
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  TextLengthCart: {
    color: "#fff",
    backgroundColor: "red",
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
    bottom: 50,
    right: 30,
    zIndex: 99,
    elevation: 99,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 100
  },
  Btn: {
    backgroundColor: "#000",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5
  },
  BtnText: {
    color: "#fff"
  },
  containerCardButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },
  PriceCard: {
    fontSize: 15
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
    width: 180,
    maxWidth: 170,
    height: 290,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8
  },
  containerListProduct: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between"
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
    flex: 1,
    padding: 10,
    position: "relative"
  }
})