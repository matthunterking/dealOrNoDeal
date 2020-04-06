import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>DEAL OR NO DEAL</Text>
    <TouchableOpacity
      style={{ borderColor: 'black', borderWidth: 2, padding: 30, margin: 30 }}
      onPress={() => navigation.navigate('ChooseYourBoxScreen')}>
      <Text>New game</Text>
    </TouchableOpacity>
  </View>
);

export default HomeScreen;
