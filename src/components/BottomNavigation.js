import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Home, Profile } from '../screens';

export default BottomNavigation = createMaterialBottomTabNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile}
})
