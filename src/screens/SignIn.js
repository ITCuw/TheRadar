import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import { Button } from '../Components';

class SignUp extends Component {
  static navigationOptions = {
    header: null
  };
  
  constructor(props){
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    }
  }

  onUserEmailChanged = userEmail => {
    this.setState({ userEmail });
  };
  onUserPasswordChanged = userPassword => {
    this.setState({ userPassword });
  };

  onButtonPress(){
    const {navigate} = this.props.navigation;
    console.log(this.state.userEmail)
    console.log(this.state.userPassword)
    navigate('Home');
  }

  render(){
    return(
      <View style={styles.containerStyle}>
        <Text style={styles.inputStyle}>Welcome Back</Text>
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
        <TextInput
          label="Password"
          placeholder="Password"
          style={styles.inputStyle}
          value={this.state.userPassword}
          duration={100}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          onChangeText={this.onUserPasswordChanged}
        />
        <Button
          title="Sign In"
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
