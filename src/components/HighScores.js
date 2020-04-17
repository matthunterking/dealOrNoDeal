import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';;
import moment from 'moment';
import { deviceWidth } from '../constants/device';
import { formatToCurrency } from '../util/currency';
import { DEAL_NO_DEAL_BUTTON } from '../constants/theme';
import { getHighScores } from '../util/storage';

const Score = ({ date, score }) => (
 <View style={styles.scoreContainer}>
  <Text style={styles.text}>{moment(date).fromNow()}</Text>
  <Text style={styles.text}>{formatToCurrency(score)}</Text>
 </View>
)

const HighScores = ({ navigation }) => {
 const [highScores, setHighScores] = useState(null);

 const getScores = async () => {
  const scores = await getHighScores();
  setHighScores(scores);
 }

 useEffect(() => {
  getScores();
  return navigation.addListener('didFocus', () => {
   getScores();
  });
 }, []);

 if (!highScores) return null;

 return (
  <View style={styles.container}>
   <View style={styles.innerContainer}>
    <Text style={styles.title}>HIGH SCORES</Text>
    <FlatList
     data={highScores}
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
  paddingHorizontal: 30,
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
