import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions } from 'react-native'
import { LineChartJs } from '../../../component/chart'

const { width, height } = Dimensions.get("window")
const index = () => {
  return (
    <View style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="transparent" barStyle="dark-content" translucent={true} />


      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          <View style={styles.containerCardOmset}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.TitleCardOmset}>Omset</Text>
              <Text>17 April 2021</Text>
            </View>
            <Text style={styles.TextCardOmset}>Rp. 200,000,000</Text>
          </View>

          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <View style={styles.containerCard}>
              <Text style={styles.TitleCard}>Jumlah Produk</Text>
              <Text style={styles.ContentCard}>200</Text>
            </View>
            <View style={styles.containerCard}>
              <Text style={styles.TitleCard}>Jumlah Trans</Text>
              <Text style={styles.ContentCard}>200</Text>
            </View>

          </View>

          <View style={{ marginBottom: 10 }}>
            <LineChartJs legend="Penjualan" />
          </View>

          <View>
            <LineChartJs legend="Pembelian" />
          </View>

        </View>


      </ScrollView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  TextCardOmset: {
    fontSize: 30, fontWeight: "900"
  },
  TitleCardOmset: {
    fontWeight: "700", fontSize: 20
  },
  containerCardOmset: {
    backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 7
  },
  ContentCard: {
    fontWeight: "900",
    fontSize: 40
  },
  TitleCard: {
    fontWeight: "700",
    fontSize: 18
  },
  containerCard: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
  },
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
  }
})
