import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatToCurrency } from '../util/currency'

const DealModal = ({ isVisable, lastOffer, takeDeal, noDeal }) => {
 return <Modal
  animationType="slide"
  transparent={true}
  visible={isVisable}
 >
  <View style={styles.outerContainer}>
   <View style={styles.container}>
    <Text>The banker offers you</Text>
    <Text>{formatToCurrency(lastOffer)}</Text>
    <TouchableOpacity style={styles.button} onPress={takeDeal}>
     <Text>Deal</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={noDeal}>
     <Text>No Deal</Text>
    </TouchableOpacity>
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
  backgroundColor: 'pink',
  height: 300,
  width: 300,
  justifyContent: 'center',
  alignItems: 'center'
 },
 button: {
  backgroundColor: 'red',
  padding: 30,
  width: 150,
  margin: 5
 }
})

export default DealModal;
