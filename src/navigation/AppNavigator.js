import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainScreen from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';

export default createAppContainer(createSwitchNavigator({
  // Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
}));