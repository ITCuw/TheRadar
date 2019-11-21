import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import * as stream from 'getstream';
import { StreamApp } from 'react-native-activity-feed';


import {
  Landing,
  SignUp,
  SignIn,
  Channels,
  Feed,
  Profile,
  Activity,
  ProfileSettings,
  ProfileCreate_One,
  ProfileCreate_Two,
  AuthLoading,
  NewPost } from './src/screens';

import { TouchableOpacity, Image } from 'react-native';
import {PostIcon} from './src/Img/icons/post.png';
//redux
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import { SET_AUTHENTICATED } from './src/redux/types';
import { logOutUser, getUserData } from './src/redux/actions/userActions';
import config from './config';

const ProfileNav = createStackNavigator(
  {
  Profile: {screen: Profile},
  ProfileSettings: {screen: ProfileSettings},
  }
);

const FeedStack = createStackNavigator(
  {
    Feed: { screen: Feed },
    NewPost: { screen: NewPost },
  }
);

const AppStack = createBottomTabNavigator(
  {
  Feed: { screen: FeedStack },
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

export default class App extends Component{
    render(){
    return (
      <StreamApp
        apiKey={config.stream.app.key}
        appId={config.stream.app.id}
        token={config.stream.app.token}
        >
      <Provider store={store}>
          <Navigation/>
      </Provider>
      </StreamApp>
    );
  };
};
