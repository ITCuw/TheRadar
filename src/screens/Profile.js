import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Input, Button } from 'react-native-elements';
import {View} from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.body}>

  <Avatar
  rounded
  size="large"
  
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex:0, marginLeft:100, marginTop: 0}}
/>


      </View>
    );
  }
}
var styles = StyleSheet.create({
  body:{
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;