import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const data = [1, 2, 3, 4, 5]

const dataTransaction = [1, 2, 3, 4, 5]

const HistorySeeDetail = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Title}>History Transaksi</Text>

        {
          dataTransaction.map((item, index) => (
            <View key={index} style={styles.containerCard}>
              <View style={styles.containerContent}>
                <Text>ID Transaction</Text>
                <Text>January 16, 2021 - 10:50</Text>
              </View>

              <View style={{ marginBottom: 40 }}>
                {
                  data.map((item, index) => (
                    <View style={styles.containerProduct}>
                      <View>
                        <Text style={styles.TitleProduct}>Kopi O</Text>
                        <Text>Rp. 6,000</Text>
                      </View>
                      <View style={styles.containerQty}>
                        <Text>1</Text>

                      </View>
                    </View>

                  ))
                }

              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                <Text>Total</Text>
                <Text>Rp. 20,000</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                <Text>Yang Di Bayar</Text>
                <Text>Rp. 20,000</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20 }}>
                <Text>Kembalian</Text>
                <Text>Rp. 20,000</Text>
              </View>
            </View>

          ))
        }

      </ScrollView>

    </View>
  )
}

export default HistorySeeDetail

const styles = StyleSheet.create({
  containerQty: {
    backgroundColor: "#cccc",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  TitleProduct: {
    fontWeight: "700",
    fontSize: 18
  },
  containerProduct: {
    flexDirection: "row",
    marginVertical: 7,
    justifyContent: "space-between",
    alignItems: "center"
  },
  containerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  containerCard: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 7
  },
  Title: {
    fontWeight: "600",
    fontSize: 35
  },
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
    flex: 1,
    // backgroundColor: "red"
  }
})
