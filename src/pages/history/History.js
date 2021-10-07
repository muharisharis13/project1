import React from 'react'
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'

const data = [1, 2, 3, 4, 5, 6]

const History = ({ navigation }) => {
  return (
    <View style={styled.container}>
      <ScrollView>
        <Text style={styled.Title}>History</Text>
        <View style={{ marginBottom: 100 }}>
          {
            data.map((item, index) => (
              <View style={styled.containerCard} key={index}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", marginBottom: 10 }}>
                  {/* <Text>ID Transaksi</Text> */}
                  <Text>January 16, 2021 - 10:50</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10, alignItems: "center", paddingHorizontal: 10 }}>
                  <View>
                    <Text style={{ fontSize: 17, fontWeight: "700" }}>Total Penjualan</Text>
                    <Text style={{ fontSize: 15 }}>Rp. 6,000</Text>
                  </View>

                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "700" }}>Produk Terjual</Text>
                    <Text style={{ fontWeight: "700" }}>5</Text>
                  </View>
                </View>

                <View style={{ marginVertical: 10, alignItems: "center" }}>
                  <Pressable style={styled.BtnSeeDetails} onPress={() => navigation.navigate("HistorySeeDetail")}>
                    <Text style={{ color: "#fff" }}>See Details</Text>
                  </Pressable>
                </View>

              </View>

            ))
          }

        </View>

      </ScrollView>
    </View>
  )
}

const styled = StyleSheet.create({
  BtnSeeDetails: {
    backgroundColor: "#000",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 7
  },
  containerCard: {
    backgroundColor: "#fff",
    borderRadius: 7,
    padding: 10,
    marginVertical: 10,
    // marginBottom: 100
  },
  Title: {
    fontWeight: "600",
    fontSize: 35
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    // marginBottom: 100
  }
})

export default History
