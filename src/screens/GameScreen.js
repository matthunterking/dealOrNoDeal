import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { generateBoxes, generateOtherBoxes } from '../util/gameSetUp';
import { offerDeal } from '../util/banker';
import { values } from '../constants/game';
import GameHeader from '../components/GameHeader';
import BoxSelectionCarousel from '../components/BoxSelectionCarousel';
import GameBoard from '../components/GameBoard';

const GameScreen = ({ navigation }) => {
  const chosenBoxNumber = navigation.getParam('itemId', {});

  const [boxValues, setBoxValues] = useState(generateBoxes());

  console.log(boxValues);

  const updateBoxValues = (selectedBoxNumber) => {
    const updatedBoxes = boxValues.map(box => {
      if (box.boxNumber === selectedBoxNumber) box.isOpened = true;
      return box
    });
    setBoxValues(updatedBoxes)
  }

  const openBox = boxNumber => {

    console.log('OPENING BOX ', boxNumber);
    // setTurnsUntilOffer(turnsUntilOffer - 1);
    // if (turnsUntilOffer === 0) {
    //   console.log('BANKER OFFERS £', offerDeal(gameValues));
    // }

    updateBoxValues(boxNumber)
  };


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }} >
      <GameHeader chosenBox={chosenBoxNumber} />
      <BoxSelectionCarousel openBox={openBox} boxValues={boxValues} chosenBoxNumber={chosenBoxNumber} />
      <GameBoard boxValues={boxValues} />
    </SafeAreaView>
  );
};

export default GameScreen;
