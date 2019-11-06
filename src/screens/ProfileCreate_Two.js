import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import { Button } from '../components';

class ProfileCreate_Two extends Component {

  onButtonPress(){
    const {navigate} = this.props.navigation;
    navigate('Channels');
  }

  render(){
    return(
      <View>
      <Text>ProfileCreate_Two!</Text>
      <Button
        title="Done"
        buttonStyle={styles.buttonStyle}
        onPress={() => this.onButtonPress()}
      />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  buttonStyle:{
   backgroundColor: '#F36F6F',
   width: 200,
   height: 50,
   marginTop: 60,
  },
})
export default ProfileCreate_Two;
