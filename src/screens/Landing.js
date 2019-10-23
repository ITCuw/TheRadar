import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../Components';

class Landing extends Component {
  constructor(){
    super()
  }

  onSignUpButtonPress(){
    const {navigate} = this.props.navigation;
    navigate('SignUp');
  }

  render(){
    return(
      <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>TheRadar</Text>
      <Text style={styles.subtitleStyle}>By Students - 4 People</Text>
        <Button
          title="Log In"
          buttonStyle={styles.buttonStyle}
          onPress={this.logInButtonPress}
        />
        <Button
          title="Sign Up"
          buttonStyle={styles.buttonStyle}
          onPress={() => this.onSignUpButtonPress()}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  containerStyle:{
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
   backgroundColor: '#F36F6F',
   width: 200,
   height: 50,
   marginTop: 10,
  },
  titleStyle: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 35,
  },
  subtitleStyle: {
    fontSize: 25,
    marginBottom: 175,
    color: 'rgb(150, 150, 150)',
  }
});

export default Landing;
