import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import { Button } from '../Components';

class ProfileCreate_One extends Component {

  onButtonPress(){
    const {navigate} = this.props.navigation;
    navigate('ProfileCreate_Two');
  }

  render(){
    return(
      <View>
      <Text>ProfileCreate_One!</Text>
      <Button
        title="Next"
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

export default ProfileCreate_One;
