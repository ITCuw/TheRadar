import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Input, Button } from 'react-native-elements';

class Profile extends Component {
  render() {
    return (
      <div>
        <Avatar
  rounded
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  }}
/>

      </div>
    );
  }
}

export default Profile;