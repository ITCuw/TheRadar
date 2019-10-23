import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components';

class Landing extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <View style={styles.containerStyles}>
      <Text style={styles.title}>TheRadar</Text>
        <Button
          title="Log In"
          buttonStyle={styles.button}
          onPress={this.logInButtonPress}
        />
        <Button
          title="Sign Up"
          buttonStyle={styles.button}
          onPress={this.signUpButtonPress}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  containerStyles:{
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
   backgroundColor: '#F36F6F',
   width: 200,
   height: 50,
   marginTop: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 200,
    marginLeft: 20,
    fontSize: 35,
  },
  nameInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  },
});
export default Landing;
