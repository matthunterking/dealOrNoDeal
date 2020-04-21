import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { deviceWidth } from '../constants/device';
import { values } from '../constants/game';
import Amount from './Amount';


const GameBoard = ({ boxValues, compressValues = true }) => {
 const allValues = values.sort((a, b) => a - b);
 const openValues = boxValues.filter(box => box.isOpened).map(({ value }) => value);
 const remainingValues = compressValues && allValues.filter(value => !openValues.includes(value)).reduce((acc, value) => {
  const isHigh = value > 999
  isHigh ? acc.high.push(value) : acc.low.push(value);
  isHigh ? acc.high.sort((a, b) => a - b) : acc.low.sort((a, b) => a - b);
  return acc;
 }, { low: [], high: [] });

 return (
  <View style={styles.container}>
   <FlatList
    style={styles.list}
    data={remainingValues ? remainingValues.low : allValues.slice(0, 11)}
    keyExtractor={item => `value-${item}`}
    renderItem={({ item }) => <Amount value={item} isOpened={openValues.includes(item)} isLarge />}
   />
   <FlatList
    style={styles.list}
    data={remainingValues ? remainingValues.high : allValues.slice(11, 22)}
    keyExtractor={item => `value-${item}`}
    renderItem={({ item }) => <Amount value={item} isOpened={openValues.includes(item)} isLarge />}
   />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  width: deviceWidth,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: 'black',
  paddingVertical: 10
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
  justifyContent: 'space-around',
 }
})

export default GameBoard;
