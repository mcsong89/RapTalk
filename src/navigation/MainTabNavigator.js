import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base'; 
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'; // 추가된 코드

import HomeTab from '../screens/AppTabNavigator/HomeTab'
import SearchTab from '../screens/AppTabNavigator/SearchTab'
import AddMediaTab from '../screens/AppTabNavigator/AddMediaTab'
import LikesTab from '../screens/AppTabNavigator/LikesTab'
import ProfileTab from '../screens/AppTabNavigator/ProfileTab'

const AppTabNavigator = createMaterialTopTabNavigator({
  HomeTab:{ screen: HomeTab },
  Search:{ screen: SearchTab },
  AddMedia:{ screen: AddMediaTab },
  Likes:{ screen: LikesTab },
  Profile:{ screen: ProfileTab }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor:'white'
    },
    iconStyle: { 
      ...Platform.select({
        ios:{
          height: 35,
          marginBottom: 20
        }
      }) 
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});
const AppTabContainet = createAppContainer(AppTabNavigator);

export default AppTabContainet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 