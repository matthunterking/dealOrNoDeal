import React, { Fragment, useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatToCurrency } from '../util/currency';
import Box from './Box'

const EndOfGameModal = ({ isVisable, dealtAt, boxValues, chosenBoxNumber, navigation }) => {
  const lastBox = boxValues.filter(({ isOpened, boxNumber }) => !isOpened && chosenBoxNumber !== boxNumber)[0];
  const yourBox = boxValues.find(({ boxNumber }) => boxNumber === chosenBoxNumber);
  const [openYourBox, setOpenYourBox] = useState(false)
  const [openOtherBox, setOpenOtherBox] = useState(false)
  const [finalScore, setFinalScore] = useState(0);
  const [hasSwapped, setHasSwapped] = useState(false);

  const chooseYourBox = () => {
    setOpenYourBox(true);
    setFinalScore(dealtAt ? dealtAt : yourBox.value);
  }

  const chooseSwap = () => {
    setOpenOtherBox(true);
    setHasSwapped(true)
    setFinalScore(lastBox.value);
  }

  return <Modal
    animationType="slide"
    transparent={true}
    visible={isVisable}
  >
    <View style={styles.outerContainer}>
      <Text>Your box</Text>
      <Box number={chosenBoxNumber} isOpened={openYourBox} value={yourBox.value} />
      <Box number={lastBox.boxNumber} isOpened={openOtherBox} value={lastBox.value} />
      <TouchableOpacity style={styles.button} onPress={chooseYourBox}>
        <Text>Open box {chosenBoxNumber}</Text>
      </TouchableOpacity>
      {dealtAt ?
        <Text>Your dealt at {dealtAt}</Text>
        :
        <View>
          <TouchableOpacity style={styles.button} onPress={chooseSwap}>
            <Text>Swap</Text>
          </TouchableOpacity>
        </View>}
      {!!finalScore && <View>
        {dealtAt ? <Text>You sold a box worth {yourBox.value} for {dealtAt}</Text> : <Text>You won {finalScore}{hasSwapped ? <Text>, your box had {yourBox.value} </Text> : null}</Text>}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text>Return to homescreen</Text>
        </TouchableOpacity>
      </View>}
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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

export default EndOfGameModal;
