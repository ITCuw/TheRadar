import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Input, Button } from 'react-native-elements';
import {View} from 'react-native';

class Profile extends Component {

  onSettingsClick(){
    const {navigate} = this.props.navigation;
    console.log('Settings Button Pressed');
    navigate('ProfileSettings');
  }

  render() {
    return (
      <View>
          <Avatar
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            onPress={()=> this.onSettingsClick()}
          />
      </View>
    );
  }
}

export default Profile;
