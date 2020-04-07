import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { generateBoxes, generateOtherBoxes } from '../util/gameSetUp';
import { offerDeal } from '../util/banker';
import { values } from '../constants/game';
import GameHeader from '../components/GameHeader';
import Box from '../components/Box';

const GameScreen = ({ navigation }) => {
  const selectedBox = navigation.getParam('itemId', {});

  const [activeBoxes, setActiveBoxes] = useState(
    generateOtherBoxes(selectedBox),
  );
  const [gameValues, setGameValues] = useState(
    values.sort((a, b) => a.value - b.value),
  );
  const [turnsUntilOffer, setTurnsUntilOffer] = useState(5);

  const boxValues = generateBoxes();

  const removeBoxFromGame = boxNumber => {
    const activeBoxesIndex = activeBoxes.indexOf(boxNumber);
    activeBoxes.splice(activeBoxesIndex, 1);
    setActiveBoxes([...activeBoxes]);
  };

  const removeValueFromBoard = boxNumber => {
    const selectedValue = boxValues[boxNumber];
    const selectedValueIndex = gameValues.indexOf(selectedValue);
    gameValues.splice(selectedValueIndex, 1);
    setGameValues([...gameValues]);
  };

  const pickBox = boxNumber => {
    setTurnsUntilOffer(turnsUntilOffer - 1);
    if (turnsUntilOffer === 0) {
      console.log('BANKER OFFERS £', offerDeal(gameValues));
    }

    removeBoxFromGame(boxNumber);
    removeValueFromBoard(boxNumber);
  };


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }} >
      <GameHeader chosenBox={selectedBox} />
      <FlatList
        data={activeBoxes}
        keyExtractor={item => `box-${item}`}
        renderItem={({ item }) => <Box number={item} onPress={pickBox} />}
        numColumns={4}
      />
      <FlatList
        data={gameValues}
        keyExtractor={item => `value-${item}`}
        renderItem={({ item }) => <View style={{ padding: 10 }}><Text>{item}</Text></View>}
        numColumns={1}
      />
    </SafeAreaView>
  );
};

export default GameScreen;

// values display = activeValues = [1, 2000, 3000 ]
