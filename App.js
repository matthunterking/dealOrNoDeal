import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ChooseYourBoxScreen from './screens/ChooseYourBoxScreen';

const navigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  ChooseYourBoxScreen: {
    screen: ChooseYourBoxScreen,
    navigationOptions: {
      headerShown: false,
    }
  }
});

export default createAppContainer(navigator);
