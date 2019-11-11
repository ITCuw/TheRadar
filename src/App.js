import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';

import {
  Landing,
  SignUp,
  SignIn,
  Channels,
  Profile,
  Activity,
  ProfileSettings,
  ProfileCreate_One,
  ProfileCreate_Two,
  AuthLoading } from './screens';

//redux
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { SET_AUTHENTICATED } from './redux/types';
import { logOutUser, getUserData } from './redux/actions/userActions';

const ProfileNav = createStackNavigator(
  {
  Profile: {screen: Profile},
  ProfileSettings: {screen: ProfileSettings},
  }
);

const AppStack = createBottomTabNavigator(
  {
  Channels: { screen: Channels },
  Activity: { screen: Activity },
  Profile: { screen: ProfileNav }
  }
);

const AuthStack = createStackNavigator(
  {
  Landing: {screen: Landing},
  SignUp: {screen: SignUp},
  SignIn: {screen: SignIn},
  }
);

const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: {screen: AuthLoading},
    App: {screen: AppStack},
    Auth: {screen: AuthStack},
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

let Navigation = createAppContainer(RootNavigator);

export default class Stack extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  };
};
