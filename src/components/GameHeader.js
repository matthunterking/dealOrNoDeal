import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Box from './Box';
import { bankerTurns } from '../constants/game';
import { formatToCurrency } from '../util/currency'

const GameHeader = ({ chosenBox, turnCounter, lastOffer, dealtAt }) => {
 const nextBankerTurn = bankerTurns.find(bankerTurn => bankerTurn > turnCounter - 1);

 return (
  <View style={styles.container}>
   <View style={styles.yourBoxContainer}>
    <Text>Your Box</Text>
    <Box number={chosenBox} />
   </View>
   <View style={styles.gameStatusContainer}>
    <Text>Boxes until deal {'🔴'.repeat(nextBankerTurn - (turnCounter - 1))}</Text>
    {lastOffer && <Text>Last offer {formatToCurrency(lastOffer)}</Text>}
    {dealtAt && <Text>Dealt at {formatToCurrency(dealtAt)}</Text>}
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
