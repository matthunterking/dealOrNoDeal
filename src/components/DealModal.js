import React, { Fragment } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { formatToCurrency } from '../util/currency';
import { DEAL_NO_DEAL_BUTTON } from '../constants/theme';

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
      <Text>You dealt at {formatToCurrency(dealtAt)}</Text>
      <TouchableOpacity style={styles.button} onPress={closeModal}>
       <Text>Close</Text>
      </TouchableOpacity>
     </Fragment>
     :
     <Fragment>
      <TouchableOpacity style={styles.button} onPress={takeDeal}>
       <Text style={styles.dealNoDealText}>Deal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={noDeal}>
       <Text style={styles.dealNoDealText}>No Deal</Text>
      </TouchableOpacity>
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
 button: {
  backgroundColor: DEAL_NO_DEAL_BUTTON,
  borderRadius: 40,
  padding: 15,
  width: 250,
  margin: 10
 },
 dealNoDealText: {
  fontSize: 25,
  textAlign: 'center',
  textTransform: 'uppercase'
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
