import React, { Fragment } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { formatToCurrency } from '../util/currency'

const Box = ({ number, onPress = null, isOpened = false, value }) => (
 <Fragment>
  {isOpened && <View style={styles.boxLid}>
   <Text>{formatToCurrency(value)}</Text>
  </View>}
  <TouchableOpacity style={styles.container} onPress={() => onPress && onPress(number)}>
   <Text style={styles.number}>{number}</Text>
  </TouchableOpacity>
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
