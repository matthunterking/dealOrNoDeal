import React, { Fragment, useRef, useEffect } from 'react';
import { Text, StyleSheet, View, Animated } from 'react-native';
import { BOX_RED, SEAL_RED } from '../constants/theme';
import Amount from './Amount';

const Seal = () => (
 <View style={styles.seal} />
)

const ClosedLid = () => (
 <View style={styles.closedLid} />
)

const OpenLid = ({ value, animatedValue, isOpened, hasBeenOpened }) => {
 if (!isOpened) return null
 return (
  <Animated.View style={[styles.boxLid, hasBeenOpened ? {} : { transform: [{ scaleY: animatedValue }] }]}>
   <View style={styles.innerBoxLid}>
    <Amount value={value} />
   </View>
  </Animated.View>
 )
}


const Box = ({ number, isOpened = false, value }) => {
 const animatedValue = new Animated.Value(0);
 const hasBeenOpened = useRef(false);

 const openLidAnimation = () => {
  Animated.timing(animatedValue, { toValue: 1, duration: 50, useNativeDriver: true }).start()
 }

 useEffect(() => {
  if (isOpened && !hasBeenOpened.current) {
   console.log('run animation');

   openLidAnimation()
   hasBeenOpened.current = true
  }
 }, [isOpened]);

 return (<Fragment>
  <OpenLid value={value} animatedValue={animatedValue} isOpened={isOpened} hasBeenOpened={hasBeenOpened.current} />
  {!isOpened && <ClosedLid />}
  <View style={styles.container}>
   {!isOpened && <Seal />}
   <View style={styles.numberContainer}>
    <Text style={styles.number}>{number}</Text>
   </View>
  </View>
 </Fragment>)
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: BOX_RED,
  padding: 15,
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  width: 100,
  borderWidth: 0.5
 },
 number: {
  borderWidth: 1,
  fontSize: 26,
  height: 30,
  width: 45,
  textAlign: 'center',
  fontWeight: 'bold'
 },
 boxLid: {
  backgroundColor: BOX_RED,
  width: 100,
  height: 55,
  padding: 5
 },
 innerBoxLid: {
  backgroundColor: 'white',
  flex: 1,
  justifyContent: 'center',
  alignItems: "center"
 },
 closedLid: {
  height: 15,
  width: 100,
  backgroundColor: BOX_RED,
  borderWidth: 0.5
 },
 numberContainer: {
  backgroundColor: 'white',
  padding: 5,
  width: 55
 },
 seal: {
  position: 'absolute',
  height: 20,
  width: 10,
  backgroundColor: SEAL_RED,
  top: -10,
  left: 5,
  borderBottomWidth: 0.5
 }
});

export default Box;
