import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { StatusUpdateForm } from 'react-native-activity-feed';

class NewPost extends Component {
  render(){
    return(
      <SafeAreaView
        style={[{ flex: 1 }, { backgroundColor: '#FFFFFF' }]}
        forceInset={{ top: 'always' }}
      >
        <StatusUpdateForm
          fullscreen
          feedGroup="timeline"
          {...this.props}
          registerSubmit={(submitFunc) => {
            this.props.navigation.setParams({ submitFunc });
          }}
        />
        </SafeAreaView>
    );
  }
}

var styles = StyleSheet.create({
  body:{
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default NewPost;
