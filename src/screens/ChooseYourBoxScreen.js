import React from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Box from '../components/Box';

const ChooseYourBoxScreen = ({ navigation }) => {
  const numbers = new Array(22).fill('').map((n, index) => index + 1);

  const selectBox = number => {
    navigation.navigate('GameScreen', { itemId: number });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose your box</Text>
      <FlatList
        data={numbers}
        keyExtractor={item => `box-${item}`}
        renderItem={({ item }) => {
          return <TouchableOpacity style={styles.boxContainer} onPress={() => selectBox(item)}>
            <Box number={item} />
          </TouchableOpacity>
        }}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxContainer: {
    margin: 5
  },
  title: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

export default ChooseYourBoxScreen;
