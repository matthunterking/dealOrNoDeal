import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { generateBoxes } from '../util/gameSetUp';
import { offerDeal } from '../util/banker';
import { bankerTurns } from '../constants/game';
import GameHeader from '../components/GameHeader';
import DealModal from '../components/DealModal';
import EndOfGameModal from '../components/EndOfGameModal';
import BoxSelectionCarousel from '../components/BoxSelectionCarousel';
import GameBoard from '../components/GameBoard';

const GameScreen = ({ navigation }) => {
  const chosenBoxNumber = navigation.getParam('itemId', {});

  const [boxValues, setBoxValues] = useState(generateBoxes());
  const [turnCounter, setTurnCounter] = useState(1);
  const [lastOffer, setLastOffer] = useState(null);
  const [currentOffer, setCurrentOffer] = useState(null);
  const [showDealModal, setShowDealModal] = useState(false);
  const [dealtAt, setDealtAt] = useState(null);
  const [showEndOfGameModel, setShowEndOfGameModel] = useState(false);

  const updateBoxValues = (selectedBoxNumber) => {
    const updatedBoxes = boxValues.map(box => {
      if (box.boxNumber === selectedBoxNumber) box.isOpened = true;
      return box
    });
    setBoxValues(updatedBoxes);
  }

  const openBox = boxNumber => {
    const selectedBox = boxValues.find(box => box.boxNumber === boxNumber)
    if (selectedBox.isOpened) return null
    updateBoxValues(boxNumber);
    setTurnCounter(turnCounter + 1)
    const remainingValues = boxValues.filter(({ isOpened }) => !isOpened).map(({ value }) => value)
    if (bankerTurns.includes(turnCounter)) {
      const offer = offerDeal(remainingValues, turnCounter)
      setShowDealModal(true)
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
    setShowDealModal(false);
    setLastOffer(currentOffer);
    checkForEndOfGame()
  }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <DealModal isVisable={showDealModal} currentOffer={currentOffer} takeDeal={takeDeal} noDeal={noDeal} dealtAt={dealtAt} closeModal={closeModal} />
      <EndOfGameModal isVisable={showEndOfGameModel} dealtAt={dealtAt} boxValues={boxValues} chosenBoxNumber={chosenBoxNumber} lastOffer={lastOffer} navigation={navigation} />
      <GameHeader chosenBox={chosenBoxNumber} turnCounter={turnCounter} lastOffer={lastOffer} dealtAt={dealtAt} />
      <BoxSelectionCarousel openBox={openBox} boxValues={boxValues} chosenBoxNumber={chosenBoxNumber} />
      <GameBoard boxValues={boxValues} />
    </SafeAreaView>
  );
};

export default GameScreen;
