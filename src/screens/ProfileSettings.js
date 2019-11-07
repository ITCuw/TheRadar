import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet,AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

class ProfileSettings extends Component {

  async signOutAsync(){
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render(){
    return(
      <View>
      <Text>ProfileSettings!</Text>
      <Button
        title="Sign Out"
        type="outline"
        onPress={() => this.signOutAsync()}
      />
      </View>
    );
  }
}

export default ProfileSettings;
