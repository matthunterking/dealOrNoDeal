import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Box = ({ number, onPress = null }) => (
 <TouchableOpacity style={styles.container} onPress={() => onPress && onPress(number)}>
  <Text style={styles.number}>{number}</Text>
 </TouchableOpacity>
)

const styles = StyleSheet.create({
 container: {
  backgroundColor: 'red',
  padding: 15,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 5,
  height: 70,
  width: 70
 },
 number: {
  backgroundColor: 'white',
  padding: 5,
  fontSize: 20,
  height: 30,
  width: 30,
  textAlign: 'center'
 }
});

export default Box;
