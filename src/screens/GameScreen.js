import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { generateBoxes } from '../util/gameSetUp';
import { offerDeal } from '../util/banker';
import { bankerTurns } from '../constants/game';
import GameHeader from '../components/GameHeader';
import DealActions from '../components/DealActions';
import EndOfGameModal from '../components/EndOfGameModal';
import BoxSelectionCarousel from '../components/BoxSelectionCarousel';
import GameBoard from '../components/GameBoard';

const GameScreen = ({ navigation }) => {
  const chosenBoxNumber = navigation.getParam('itemId', {});

  const [boxValues, setBoxValues] = useState(null);
  const [turnCounter, setTurnCounter] = useState(1);
  const [lastOffer, setLastOffer] = useState(null);
  const [currentOffer, setCurrentOffer] = useState(null);
  const [showDealActions, setShowDealActions] = useState(false);
  const [dealtAt, setDealtAt] = useState(null);
  const [showEndOfGameModel, setShowEndOfGameModel] = useState(false);
  const [disableBoxPress, setDisableBoxPress] = useState(false);

  useEffect(() => {
    setBoxValues(generateBoxes())
  }, [])

  const updateBoxValues = (selectedBoxNumber) => {
    const updatedBoxes = boxValues.map(box => {
      if (box.boxNumber === selectedBoxNumber) box.isOpened = true;
      return box
    });
    setBoxValues(updatedBoxes);
  }

  const openBox = boxNumber => {
    const selectedBox = boxValues.find(box => box.boxNumber === boxNumber)
    if (selectedBox.isOpened || disableBoxPress) return null
    updateBoxValues(boxNumber);
    setTurnCounter(turnCounter + 1)
    const remainingValues = boxValues.filter(({ isOpened }) => !isOpened).map(({ value }) => value)
    if (bankerTurns.includes(turnCounter)) {
      setDisableBoxPress(true)
      const offer = offerDeal(remainingValues, turnCounter)
      const timer = setTimeout(() => {
        setShowDealActions(true)
        clearTimeout(timer)
      }, 1000)
      setCurrentOffer(offer)
    }
  };

  const takeDeal = () => {
    closeModal()
    setDealtAt(currentOffer)
  }

  const noDeal = () => {
    closeModal()
  }

  const checkForEndOfGame = () => {
    if (turnCounter === 21) {
      setShowEndOfGameModel(true)
    }
  }

  const closeModal = () => {
    setShowDealActions(false);
    setLastOffer(currentOffer);
    setDisableBoxPress(false)
    checkForEndOfGame()
  }

  if (!boxValues) return null

  return (
    <SafeAreaView style={styles.container} >
      <EndOfGameModal isVisable={showEndOfGameModel} dealtAt={dealtAt} boxValues={boxValues} chosenBoxNumber={chosenBoxNumber} lastOffer={lastOffer} navigation={navigation} />
      <GameHeader chosenBox={chosenBoxNumber} turnCounter={turnCounter} lastOffer={lastOffer} dealtAt={dealtAt} />
      {showDealActions ?
        <DealActions isVisable={showDealActions} currentOffer={currentOffer} takeDeal={takeDeal} noDeal={noDeal} dealtAt={dealtAt} closeModal={closeModal} />
        :
        <BoxSelectionCarousel openBox={openBox} boxValues={boxValues} chosenBoxNumber={chosenBoxNumber} disableBoxPress={disableBoxPress} />
      }
      <GameBoard boxValues={boxValues} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})

export default GameScreen;
