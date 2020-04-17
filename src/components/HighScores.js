import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { deviceWidth } from '../constants/device';
import { formatToCurrency } from '../util/currency';
import { DEAL_NO_DEAL_BUTTON } from '../constants/theme'

const tempHighScores = [
 { date: '11/02/2020', score: 3000 },
 { date: '11/02/2020', score: 1000 },
 { date: '11/02/2020', score: 250 },
 { date: '11/02/2020', score: 100 },
 { date: '11/02/2020', score: 0.5 }
]

const Score = ({ date, score }) => (
 <View style={styles.scoreContainer}>
  <Text style={styles.text}>{date}</Text>
  <Text style={styles.text}>{formatToCurrency(score)}</Text>
 </View>
)

const HighScores = () => {
 if (!tempHighScores) return null;
 return (
  <View style={styles.container}>
   <View style={styles.innerContainer}>
    <Text style={styles.title}>HIGH SCORES</Text>
    <FlatList
     data={tempHighScores}
     keyExtractor={(item, index) => `score-${index}`}
     renderItem={({ item }) => <Score {...item} />}
    />
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  width: deviceWidth,
  paddingHorizontal: 30,
  marginTop: 10
 },
 innerContainer: {
  backgroundColor: 'white',
  borderRadius: 10
 },
 scoreContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 50,
  marginVertical: 3
 },
 title: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: DEAL_NO_DEAL_BUTTON
 },
 text: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center'
 }
})

export default HighScores;
