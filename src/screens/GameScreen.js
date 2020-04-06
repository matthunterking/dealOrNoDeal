import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { generateBoxes, generateOtherBoxes } from '../util/gameSetUp';
import { values } from '../constants';
import Box from '../components/Box'

const GameScreen = ({ navigation }) => {
 const selectedBox = navigation.getParam('itemId', {});

 const [activeBoxes, setActiveBoxes] = useState(generateOtherBoxes(selectedBox))
 const [gameValues, setGameValues] = useState(values.sort((a, b) => a.value - b.value))

 const boxValues = generateBoxes();

 const removeBoxFromGame = (boxNumber) => {
  const activeBoxesIndex = activeBoxes.indexOf(boxNumber)
  activeBoxes.splice(activeBoxesIndex, 1);
  setActiveBoxes([...activeBoxes]);
 }

 const removeValueFromBoard = (boxNumber) => {
  const selectedValue = boxValues[boxNumber];
  const selectedValueIndex = gameValues.indexOf(selectedValue)
  gameValues.splice(selectedValueIndex, 1);
  setGameValues([...gameValues])
 }

 const pickBox = boxNumber => {
  removeBoxFromGame(boxNumber)
  removeValueFromBoard(boxNumber)
 }


 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }} >
   <Text>This is the selectedBox => {selectedBox}</Text>
   <FlatList
    data={activeBoxes}
    keyExtractor={(item) => `box-${item}`}
    renderItem={({ item }) => <Box number={item} onPress={pickBox} />}
    numColumns={4}
   />
   <FlatList
    data={gameValues}
    keyExtractor={(item) => `value-${item}`}
    renderItem={({ item }) => <View style={{ padding: 10 }}><Text>{item}</Text></View>}
    numColumns={1}
   />
  </View>
 )
}

export default GameScreen;

// values display = activeValues = [1, 2000, 3000 ]
