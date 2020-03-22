import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import UpdatesScreen from '../screens/updates/UpdatesScreen';
import MedicationsScreen from '../screens/medication/MedicationsScreen';
import MoreScreen from '../screens/more/MoreScreen';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {headerShown: false},
  },
  Updates: {
    screen: UpdatesScreen,
    navigationOptions: {headerShown: false},
  },
  Medications: {
    screen: MedicationsScreen,
    navigationOptions: {headerShown: false},
  },
  More: {
    screen: MoreScreen,
    navigationOptions: {headerShown: false},
  },
});

export default createAppContainer(TabNavigator);
