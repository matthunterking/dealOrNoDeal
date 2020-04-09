import React, { Fragment, useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatToCurrency } from '../util/currency';
import Box from './Box';
import Button from './Button';

const EndOfGameModal = ({ isVisable, dealtAt, boxValues, chosenBoxNumber, navigation, lastOffer }) => {
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

  const renderHasDealt = () => {
    return (
      <Fragment>
        <View style={styles.boxContainer}>
          <Text style={styles.text}>Your box</Text>
          <Box number={chosenBoxNumber} isOpened={openYourBox} value={yourBox.value} />
        </View>
        <View style={styles.finalResultContainer}>
          {finalScore ?
            <Fragment>
              <Text style={styles.text}>You sold a box worth</Text>
              <Text style={styles.finalResult}>{formatToCurrency(yourBox.value)}</Text>
              <Text style={styles.text}>for</Text>
              <Text style={styles.finalResult}>{formatToCurrency(dealtAt)}</Text>
              <Text style={styles.text}>
                {dealtAt > yourBox.value ? 'You beat the banker!' : 'You should have kept going!'}
              </Text>
              <Button onPress={() => navigation.navigate('HomeScreen')} content='Return to homescreen' />
            </Fragment >
            :
            <Fragment>
              <Text style={styles.text}>Your dealt at</Text>
              <Text style={styles.finalResult}>{formatToCurrency(dealtAt)}</Text>
              <Button onPress={chooseYourBox} content={`Open box ${chosenBoxNumber}`} />
            </Fragment>
          }
        </View >
      </Fragment>
    )
  }

  const renderNoDealSetUp = () => {
    const offerSwap = Math.random() > 0.5;

    if (!!finalScore) return renderNoDealFinalScore()

    return (
      <Fragment>
        {offerSwap && <Text style={styles.finalResult}>The Banker has offer you the swap</Text>}
        <View style={styles.boxContainer}>
          <Text style={styles.text}>Your box</Text>
          <Box number={chosenBoxNumber} isOpened={openYourBox} value={yourBox.value} />
        </View>
        <Button onPress={chooseYourBox} content={`Open box ${chosenBoxNumber}`} />
        {offerSwap && <Fragment>
          <View style={styles.boxContainer}>
            <Box number={lastBox.boxNumber} isOpened={openOtherBox} value={lastBox.value} />
          </View>
          <Button onPress={chooseSwap} content={`Open box ${lastBox.boxNumber}`} />
        </Fragment>}
      </Fragment>
    )

  }

  const renderNoDealFinalScore = () => {
    if (hasSwapped) return (
      <Fragment>
        <View style={styles.boxContainer}>
          <Box number={lastBox.boxNumber} isOpened={openOtherBox} value={lastBox.value} />
        </View>
        <Text style={styles.text}>You won</Text>
        <Text style={styles.finalResult}>{formatToCurrency(finalScore)}</Text>
        <Text style={styles.text}>Box {chosenBoxNumber} contained {formatToCurrency(yourBox.value)}</Text>
        <Text style={styles.finalResult}>
          {finalScore > yourBox.value ? 'Great swap!' : 'You should have kept your box!'}
        </Text>
        <Button onPress={() => navigation.navigate('HomeScreen')} content='Return to homescreen' />
      </Fragment>
    )

    return (
      <Fragment>
        <View style={styles.boxContainer}>
          <Box number={chosenBoxNumber} isOpened={openYourBox} value={yourBox.value} />
        </View>
        <Text style={styles.text}>You won</Text>
        <Text style={styles.finalResult}>{formatToCurrency(finalScore)}</Text>
        <Text style={styles.text}>
          {finalScore > lastOffer ? 'You beat the banker!' : `But you could have won ${lastOffer}`}
        </Text>
        <Button onPress={() => navigation.navigate('HomeScreen')} content='Return to homescreen' />
      </Fragment>
    )
  }

  const offerSwap = Math.random() > 0.5;

  // No deal no swap
  // No deal swap


  return <Modal
    animationType="slide"
    transparent={true}
    visible={isVisable}
  >
    <View style={styles.outerContainer}>
      {dealtAt ? renderHasDealt() : renderNoDealSetUp()}
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
  boxContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    marginBottom: 5
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
  },
  finalResult: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  finalResultContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default EndOfGameModal;
