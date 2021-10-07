import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import {
  LineChart,
} from "react-native-chart-kit";
import { Svg, Rect, Text as TextSVG } from 'react-native-svg'

const { width, height } = Dimensions.get("window")



export const LineChartJs = ({ legend }) => {

  let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })

  return <LineChart
    onDataPointClick={({ value, getColor }) => { console.log({ value: value, getColor: getColor }) }}
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            200, 100, 500, 400, 333, 222
          ]
        }
      ],
      legend: [`${legend}`]
    }}
    width={width} // from react-native
    height={height / 2.5}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#ffff",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 0.5) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 10
      },
      propsForDots: {
        r: "5",
        strokeWidth: "1",
      },
      barPercentage: 0.5,
    }}
    bezier
    yAxisSuffix="K"

    decorator={() => {
      return tooltipPos.visible ? <View>
        <Svg>
          <Rect x={tooltipPos.x - 15}
            y={tooltipPos.y + 10}
            width="40"
            height="30"
            fill="black" />
          <TextSVG
            x={tooltipPos.x + 5}
            y={tooltipPos.y + 30}
            fill="white"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle">
            {tooltipPos.value}
          </TextSVG>
        </Svg>
      </View> : null
    }}
    onDataPointClick={(data) => {

      let isSamePoint = (tooltipPos.x === data.x
        && tooltipPos.y === data.y)

      isSamePoint ? setTooltipPos((previousState) => {
        return {
          ...previousState,
          value: data.value,
          visible: !previousState.visible
        }
      })
        :
        setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true });

    }}
  />

}