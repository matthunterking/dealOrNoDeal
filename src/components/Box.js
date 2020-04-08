import React, { Fragment } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { formatToCurrency } from '../util/currency'

const Box = ({ number, isOpened = false, value }) => (
 <Fragment>
  {isOpened && <View style={styles.boxLid}>
   <Text>{formatToCurrency(value)}</Text>
  </View>}
  <View style={styles.container}>
   <Text style={styles.number}>{number}</Text>
  </View>
 </Fragment>
)

const styles = StyleSheet.create({
 container: {
  backgroundColor: 'red',
  padding: 15,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 5,
  height: 70,
  width: 70
 },
 number: {
  backgroundColor: 'white',
  padding: 5,
  fontSize: 20,
  height: 30,
  width: 30,
  textAlign: 'center'
 },
 boxLid: {
  backgroundColor: 'white'
 }
});

export default Box;
