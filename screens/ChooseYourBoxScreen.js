import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Box from '../components/Box'

const ChooseYourBoxScreen = () => {
 const numbers = new Array(22);

 return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Choose your box</Text>
  <FlatList
   data={numbers}
   keyExtractor={(item, index) => `box-${index}`}
   renderItem={({ item, index }) => <Box number={index + 1} />}
  />

 </View>
}

export default ChooseYourBoxScreen;
