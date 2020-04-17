import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DEAL_NO_DEAL_BUTTON } from '../constants/theme';

const Button = ({ onPress, content, isSmall = false }) => (
 <TouchableOpacity style={[styles.container, isSmall ? styles.small : {}]} onPress={onPress}>
  <Text style={[styles.text, isSmall ? styles.smallText : {}]}>{content}</Text>
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
 small: {
  width: 150
 },
 smallText: {
  fontSize: 20,
 },
 text: {
  fontSize: 25,
  textAlign: 'center',
  textTransform: 'uppercase'
 },
});

export default Button;
