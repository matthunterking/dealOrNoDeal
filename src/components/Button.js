import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DEAL_NO_DEAL_BUTTON } from '../constants/theme';

const Button = ({ onPress, content }) => (
 <TouchableOpacity style={styles.container} onPress={onPress}>
  <Text style={styles.text}>{content}</Text>
 </TouchableOpacity>
)

const styles = StyleSheet.create({
 container: {
  backgroundColor: DEAL_NO_DEAL_BUTTON,
  borderRadius: 40,
  padding: 15,
  width: 250,
  margin: 10
 },
 text: {
  fontSize: 25,
  textAlign: 'center',
  textTransform: 'uppercase'
 },
});

export default Button;
