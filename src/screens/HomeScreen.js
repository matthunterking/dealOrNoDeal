import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AMOUNT_RED } from '../constants/theme';
import Button from '../components/Button';
import HighScores from '../components/HighScores';

const phoneImage = require('../assets/phone.png');

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>DEAL{"\n"}OR{"\n"}NO DEAL</Text>
    <Image source={phoneImage} style={styles.phone} />
    <Button
      onPress={() => navigation.navigate('ChooseYourBoxScreen')}
      content='NEW GAME'
    />
    <HighScores />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AMOUNT_RED
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 40,
    textAlign: 'center'
  },
  phone: {
    marginTop: 20
  }
})

export default HomeScreen;
