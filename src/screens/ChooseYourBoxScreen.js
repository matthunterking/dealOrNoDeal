import React from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Box from '../components/Box'

const ChooseYourBoxScreen = ({ navigation }) => {
  const numbers = new Array(22).fill('').map((n, index) => index + 1);

  const selectBox = number => {
    navigation.navigate('GameScreen', { itemId: number });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Choose your box</Text>
      <FlatList
        data={numbers}
        keyExtractor={item => `box-${item}`}
        renderItem={({ item }) => <Box number={item} onPress={selectBox} />}
        numColumns={4}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChooseYourBoxScreen;
