import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatToCurrency } from '../util/currency';
import { AMOUNT_RED, AMOUNT_BLUE } from '../constants/theme';

const Amount = ({ value, isOpened = false, isLarge = false }) => {
 const isHighValue = value > 999;
 const backgroundColor = isHighValue ? AMOUNT_RED : AMOUNT_BLUE;
 return (
  <View style={[
   styles.container,
   { backgroundColor },
   isOpened ? { transform: [{ translateX: isHighValue ? 500 : -500 }] } : {}
  ]}
  >
   <Text style={[styles.text, isLarge ? styles.largeText : {}]}>{formatToCurrency(value)}</Text>
  </View >
 )
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: 'pink',
  padding: 5,
  borderRadius: 10,
  borderWidth: 0.5,
  minWidth: 70
 },
 text: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center'
 },
 largeText: {
  fontSize: 25
 },
 amount: {
  flex: 1,
  textAlign: 'center',
  fontSize: 25,
  borderWidth: 1,
 },
 lowValue: {
  backgroundColor: 'blue'
 },
 highValue: {
  backgroundColor: 'red'
 },
 offBoard: {
  backgroundColor: 'green'
 }
})

export default Amount;
