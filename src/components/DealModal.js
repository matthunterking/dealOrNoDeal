import React, { Fragment } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { formatToCurrency } from '../util/currency';
import Button from './Button';

const phoneImage = require('../assets/phone.png');

const DealModal = ({ isVisable, currentOffer, takeDeal, noDeal, dealtAt, closeModal }) => {
 return <Modal
  animationType="slide"
  transparent={true}
  visible={isVisable}
 >
  <View style={styles.outerContainer}>
   <View style={styles.container}>
    <Image source={phoneImage} />
    <Text style={styles.offerText}>The banker offers you</Text>
    <Text style={styles.offer}>{formatToCurrency(currentOffer)}</Text>
    {dealtAt ?
     <Fragment>
      <Text style={styles.offerText}>You dealt at {formatToCurrency(dealtAt)}</Text>
      <Button onPress={closeModal} content='close' />
     </Fragment>
     :
     <Fragment>
      <Button onPress={takeDeal} content='Deal' />
      <Button onPress={noDeal} content='No Deal' />
     </Fragment>
    }
   </View>
  </View>
 </Modal>
}

const styles = StyleSheet.create({
 outerContainer: {
  flex: 1,
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
  fontSize: 25
 },
 offer: {
  fontSize: 30,
  fontWeight: 'bold'
 }
})

export default DealModal;
