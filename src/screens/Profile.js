import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Input, Button } from 'react-native-elements';
import {View} from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View>

  <Avatar
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>
      </View>
    );
  }
}

export default Profile;