import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import settings from '../Img/settings.png';

class Profile extends Component {


  onSettingsClick(){
    const {navigate} = this.props.navigation;
    console.log('Settings Button Pressed');
    navigate('ProfileSettings');
  }

  render(){
    return(
      <View style={styles.containerStyle}>
        <View stlye={styles.headerStyle}>
        <TouchableOpacity onPress={()=> this.onSettingsClick()}>
          <View style={styles.settingsContainerStyle}>
            <Image
              source={require('../Img/settings.png')}
              style={styles.settingsStyle}
            />
          </View>
        </TouchableOpacity>
        </View>
        <Text>Profile!</Text>
        <Text>Zach!</Text>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  settingsStyle: {
    width: 40,
    height: 40,
  },
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  settingsContainerStyle: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingTop: 10,
  }
});

export default Profile;
