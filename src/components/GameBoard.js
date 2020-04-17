import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { deviceWidth } from '../constants/device';
import { values } from '../constants/game';
import Amount from './Amount';


const GameBoard = ({ boxValues }) => {
 const allValues = values.sort((a, b) => a - b);
 const openValues = boxValues.filter(box => box.isOpened).map(({ value }) => value);

 return (
  <View style={styles.container}>
   <FlatList
    style={styles.list}
    data={allValues.slice(0, 11)}
    keyExtractor={item => `value-${item}`}
    renderItem={({ item }) => <Amount value={item} isOpened={openValues.includes(item)} isLarge />}
   />
   <FlatList
    style={styles.list}
    data={allValues.slice(11, 22)}
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
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'silver'
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
