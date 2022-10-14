import React, { Component } from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { useDispatch, useSelector } from "react-redux";

export default function Screen7() {

  const percentage = useSelector((state: any) => state.piechartmark);
  var count = 0;
  percentage.map((a: any, b: any) => {
    count = count + a;
  })
  var remaining = 100 - count;
  const widthAndHeight = 250
  const series = [count, remaining]
  const sliceColor = ['green', 'red',]


  return (
    <ScrollView style={{ flex: 1, marginVertical: "40%" }}>
      <View style={styles.container}>
        <Text style={styles.title}>pie chart</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
        <Text style={styles.title}>your score is {count} %</Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});