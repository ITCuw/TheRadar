import React, {Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoading extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  };

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('FBIdToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  };
};

export default AuthLoading;
