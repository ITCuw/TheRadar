import React, {Component} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
})
export default AuthLoading;
