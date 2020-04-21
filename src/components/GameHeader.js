import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Box from './Box';
import { bankerTurns } from '../constants/game';
import { formatToCurrency } from '../util/currency';
import { DEAL_NO_DEAL_BUTTON } from '../constants/theme';

const GameStatus = ({ text, valueToDisplay }) => (
 <View>
  <Text style={styles.text}>{text}</Text>
  <Text style={styles.value}>{valueToDisplay}</Text>
 </View>
)

const GameHeader = ({ chosenBox, turnCounter, lastOffer, dealtAt }) => {
 const nextBankerTurn = bankerTurns.find(bankerTurn => bankerTurn > turnCounter - 1);

 return (
  <View style={styles.container}>
   <View style={styles.yourBoxContainer}>
    <Text style={styles.text}>Your Box</Text>
    <Box number={chosenBox} />
   </View>
   <View style={styles.gameStatusContainer}>
    <GameStatus text='Boxes until deal' valueToDisplay={'🔴'.repeat(nextBankerTurn - (turnCounter - 1))} />
    <View style={styles.dealStatusContainer}>
     {lastOffer && <GameStatus text='Last offer' valueToDisplay={formatToCurrency(lastOffer)} />}
     {dealtAt && <GameStatus text='Dealt at' valueToDisplay={formatToCurrency(dealtAt)} />}
    </View>
   </View>
  </View >
 )
}

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
 },
 yourBoxContainer: {
  flex: 1,
  justifyContent: 'center',
  padding: 5,
  alignItems: 'center',
 },
 gameStatusContainer: {
  flex: 2,
  justifyContent: 'space-around'
 },
 text: {
  textAlign: 'center',
  marginBottom: 5,
  fontSize: 16,
  textTransform: 'uppercase',
  fontWeight: 'bold'
 },
 value: {
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 'bold',
  color: 'blue'
 },
 dealStatusContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around'
 }
})

export default GameHeader;
