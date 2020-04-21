import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native'

const SpeechBubble = ({ children }) => {
 const opacity = new Animated.Value(0);

 Animated.timing(opacity, { toValue: 1, duration: 600, delay: 300, useNativeDriver: true }).start();

 return <Animated.View style={[styles.container, { opacity }]}>
  <Text style={styles.text}>{children}</Text>
  <View style={styles.tail}
  />
 </Animated.View>
}

const styles = StyleSheet.create({
 container: {
  position: 'absolute',
  backgroundColor: 'white',
  height: 60,
  width: 70,
  top: 3,
  right: 0,
  padding: 2,
  borderRadius: 10
 },
 text: {
  textAlign: 'center'
 },
 tail: {
  position: 'absolute',
  height: 20,
  width: 10,
  bottom: -14,
  left: 10,
  borderColor: 'transparent',
  borderTopColor: 'white',
  borderWidth: 5,
  borderRightWidth: 5,
  borderTopWidth: 15,
  transform: [{ rotate: "45deg" }]
 }
})

export default SpeechBubble;
