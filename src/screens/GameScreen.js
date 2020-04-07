import React, { useState } from 'react';
import { SafeAreaView, Modal, Text, View } from 'react-native';
import { generateBoxes } from '../util/gameSetUp';
import { offerDeal } from '../util/banker';
import { bankerTurns } from '../constants/game';
import GameHeader from '../components/GameHeader';
import DealModal from '../components/DealModal';
import BoxSelectionCarousel from '../components/BoxSelectionCarousel';
import GameBoard from '../components/GameBoard';

const GameScreen = ({ navigation }) => {
  const chosenBoxNumber = navigation.getParam('itemId', {});

  const [boxValues, setBoxValues] = useState(generateBoxes());
  const [turnCounter, setTurnCounter] = useState(1);
  const [lastOffer, setLastOffer] = useState(null);
  const [showDealModal, setShowDealModal] = useState(false);


  const updateBoxValues = (selectedBoxNumber) => {
    const updatedBoxes = boxValues.map(box => {
      if (box.boxNumber === selectedBoxNumber) box.isOpened = true;
      return box
    });
    setBoxValues(updatedBoxes);
  }

  const openBox = boxNumber => {
    updateBoxValues(boxNumber);
    setTurnCounter(turnCounter + 1)
    const remainingValues = boxValues.filter(({ isOpened }) => !isOpened).map(({ value }) => value)
    if (bankerTurns.includes(turnCounter)) {
      const offer = offerDeal(remainingValues)
      setShowDealModal(true)
      setLastOffer(offer)
    }

  };

  const takeDeal = () => {
    closeModal()
  }

  const noDeal = () => {
    closeModal()
  }

  const closeModal = () => {
    setShowDealModal(false);
  }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }} >
      <DealModal isVisable={showDealModal} lastOffer={lastOffer} takeDeal={takeDeal} noDeal={noDeal} />
      <GameHeader chosenBox={chosenBoxNumber} />
      <BoxSelectionCarousel openBox={openBox} boxValues={boxValues} chosenBoxNumber={chosenBoxNumber} />
      <GameBoard boxValues={boxValues} />
    </SafeAreaView>
  );
};

export default GameScreen;
