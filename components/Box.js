import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = ({ number }) => (
 <View style={styles.container}>
  <Text style={styles.number}>{number}</Text>
 </View>
)

const styles = StyleSheet.create({
 container: {
  backgroundColor: 'red',
  padding: 15,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 5
 },
 number: {
  backgroundColor: 'white',
  padding: 5,
  fontSize: 20
 }
});

export default Box;
