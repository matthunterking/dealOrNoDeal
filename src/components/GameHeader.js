import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Box from './Box';

const GameHeader = ({ chosenBox, selectionsTillNextDeal, lastOffer, dealtAt }) => {
 return (
  <View style={styles.container}>
   <View style={styles.yourBoxContainer}>
    <Text>Your Box</Text>
    <Box number={chosenBox} />
   </View>
   <View style={styles.gameStatusContainer}>
    <Text>Boxes until deal {selectionsTillNextDeal}</Text>
    {lastOffer && <Text>Last offer {lastOffer}</Text>}
    {dealtAt && <Text>Dealt at {dealtAt}</Text>}
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row'
 },
 yourBoxContainer: {
  flex: 1,
  justifyContent: 'center',
  padding: 15
 },
 gameStatusContainer: {
  flex: 2,
  justifyContent: 'space-around'
 }
})

export default GameHeader;
