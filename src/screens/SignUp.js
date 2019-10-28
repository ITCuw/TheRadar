import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import { Button } from '../Components';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      userEmail: ''
    }
  }
  
  onUserEmailChanged = userEmail => {
    this.setState({ userEmail });
  };

  onButtonPress(){
    const {navigate} = this.props.navigation;
    console.log(this.state.userEmail)
    navigate('Home');
  }

  render(){
    return(
      <View style={styles.containerStyle}>
        <Text style={styles.inputStyle}>Sign Up</Text>
        <TextInput
          label="Email"
          placeholder="Email"
          style={styles.inputStyle}
          value={this.state.userEmail}
          duration={100}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          onChangeText={this.onUserEmailChanged}
        />
        <Button
          title="Sign Up"
          buttonStyle={styles.buttonStyle}
          onPress={() => this.onButtonPress()}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  titleStyle: {
    fontSize: 35,
  },
  inputStyle: {
    fontSize: 25,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  containerStyle: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle:{
   backgroundColor: '#F36F6F',
   width: 200,
   height: 50,
   marginTop: 60,
  },
})
export default SignUp;
