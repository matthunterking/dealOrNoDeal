import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { deviceWidth } from '../constants/device';
import { values } from '../constants/game';
import { formatToCurrency } from '../util/currency'

const Amount = ({ value, isOpened }) => (
 <Text
  style={[
   styles.amount,
   value > 999 ? styles.highValue : styles.lowValue,
   isOpened ? { backgroundColor: 'white', color: 'white' } : {}
  ]}
 >
  {formatToCurrency(value)}
 </Text>
)

const GameBoard = ({ boxValues }) => {
 const allValues = values.sort((a, b) => a - b).map(value => {
  const { isOpened } = boxValues.find(box => box.value === value);
  return { value, isOpened }
 });

 return (
  <View style={styles.container}>
   <FlatList
    style={styles.list}
    data={allValues.slice(0, 11)}
    keyExtractor={item => `value-${item.value}`}
    renderItem={({ item }) => <Amount {...item} />}
   />
   <FlatList
    style={styles.list}
    data={allValues.slice(11, 22)}
    keyExtractor={item => `value-${item.value}`}
    renderItem={({ item }) => <Amount {...item} />}
   />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  width: deviceWidth,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
 },
 list: {
  flex: 1
 },
 yourBoxContainer: {
  flex: 1,
  justifyContent: 'center',
  padding: 15
 },
 gameStatusContainer: {
  flex: 2,
  justifyContent: 'space-around'
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
 }
})

export default GameBoard;
