import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
import { formatToCurrency } from '../util/currency';
import Button from './Button';
import { deviceWidth } from '../constants/device';

const phoneImage = require('../assets/phone.png');

const DealActions = ({ currentOffer, takeDeal, noDeal, dealtAt, closeModal }) => {
 const [isRinging, setIsRinging] = useState(true);

 const animatedValue = new Animated.Value(0);

 const handleAnimation = () => {
  Animated.loop(
   Animated.sequence([
    Animated.timing(animatedValue, { toValue: 1.0, duration: 50, useNativeDriver: true }),
    Animated.timing(animatedValue, { toValue: -1.0, duration: 100, useNativeDriver: true }),
    Animated.timing(animatedValue, { toValue: 0.0, duration: 50, useNativeDriver: true })
   ])
  ).start()
 }

 useEffect(() => handleAnimation(), [])

 return (
  <View style={styles.outerContainer}>
   {isRinging ?
    <TouchableOpacity
     onPress={() => setIsRinging(false)}
     style={[styles.answerPhoneButton, {
      transform: [{
       rotate: animatedValue.interpolate({
        inputRange: [-1, 1],
        outputRange: ['-0.1rad', '0.1rad']
       })
      }]
     }]}
    >
     <Image source={phoneImage} style={styles.phone} resizeMode='contain' />
    </TouchableOpacity>
    :
    <Fragment>
     <Image source={phoneImage} style={styles.phone} resizeMode='contain' />
     <View style={styles.offerContainer}>
      <Text style={styles.offerText}>The banker offers you</Text>
      <Text style={styles.offer}>{formatToCurrency(currentOffer)}</Text>
      {dealtAt ?
       <Fragment>
        <Text style={styles.offerText}>You dealt at {formatToCurrency(dealtAt)}</Text>
        <Button onPress={closeModal} content='close' isSmall />
       </Fragment>
       :
       <Fragment>
        <Button onPress={takeDeal} content='Deal' isSmall />
        <Button onPress={noDeal} content='No Deal' isSmall />
       </Fragment>
      }
     </View>
    </Fragment>
   }
  </View >
 )
}

const styles = StyleSheet.create({
 outerContainer: {
  height: 200,
  width: deviceWidth,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
 },
 answerPhoneButton: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 phone: {
  width: '35%'
 },
 offerContainer: {
  flex: 1,
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
 },
 container: {
  backgroundColor: 'white',
  borderRadius: 10,
  borderWidth: 3,
  height: 500,
  width: 350,
  justifyContent: 'center',
  alignItems: 'center'
 },
 offerText: {
  fontSize: 20
 },
 offer: {
  fontSize: 22,
  fontWeight: 'bold'
 }
})

export default DealActions;
