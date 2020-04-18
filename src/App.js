import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ChooseYourBoxScreen from './screens/ChooseYourBoxScreen';
import GameScreen from './screens/GameScreen';

const navigator = createSwitchNavigator({
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
  },
  GameScreen: {
    screen: GameScreen,
    navigationOptions: {
      headerShown: false,
    }
  }
}, {
  initialRoute: 'HomeScreen'
});

export default createAppContainer(navigator);
