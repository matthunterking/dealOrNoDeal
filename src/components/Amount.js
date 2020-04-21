import React, { useEffect, useState, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { formatToCurrency } from '../util/currency';
import { AMOUNT_RED, AMOUNT_BLUE } from '../constants/theme';
import { isLargeDevice } from '../constants/device';

const Amount = ({ value, isOpened = false, isLarge = false }) => {
 const animatedValue = new Animated.Value(0);
 const hasBeenOpened = useRef(false)
 const isHighValue = value > 999;
 const backgroundColor = isHighValue ? AMOUNT_RED : AMOUNT_BLUE;

 const removeAnimated = () => {
  const newPostion = isHighValue ? 500 : -500;
  Animated.timing(animatedValue, { toValue: newPostion, duration: 2000, useNativeDriver: true }).start()
 }

 useEffect(() => {
  if (isOpened && !hasBeenOpened.current) {
   removeAnimated()
   hasBeenOpened.current = true
  }
 }, [isOpened]);

 return (
  <Animated.View style={[
   styles.container,
   { backgroundColor },
   isOpened ? { transform: [{ translateX: animatedValue }] } : {},
   hasBeenOpened.current ? { opacity: 0 } : {}
  ]}
  >
   <Text style={[styles.text, isLarge ? styles.largeText : {}]}>{formatToCurrency(value)}</Text>
  </Animated.View >
 )
}

const styles = StyleSheet.create({
 container: {
  padding: isLargeDevice ? 5 : 3,
  borderRadius: 10,
  borderWidth: 0.5,
  minWidth: 70,
  borderColor: 'silver',
  borderWidth: 1
 },
 text: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center'
 },
 largeText: {
  fontSize: isLargeDevice ? 20 : 16
 },
 amount: {
  flex: 1,
  textAlign: 'center',
  fontSize: 25,
  borderWidth: 1,
 },
 lowValue: {
  backgroundColor: 'blue'
 },
 highValue: {
  backgroundColor: 'red'
 },
 offBoard: {
  backgroundColor: 'green'
 }
})

export default Amount;
