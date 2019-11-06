import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import propTypes from 'prop-types';
import axios from 'axios';

class SignIn extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    }
  }

  onEmailChange = email => {
    this.setState({ email });
  };
  onPasswordChange = password => {
    this.setState({ password });
  };

  onSignInPress(){
    const {navigate} = this.props.navigation;
    this.setState({
      loading: true,
      errors: {}
    });
    console.log(this.state.errors)
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post('https://us-central1-theradar-6242d.cloudfunctions.net/api/logIn', userData)
      .then(res => {
        this.setState({
          loading: false,
        });
        navigate('Channels');
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        });
        console.log(this.state.errors)
      });
  };

  render(){
    const { errors, loading } = this.state;
    return(
        <View style={styles.body}>
        <View style={styles.containerStyle}>
          <Text style={styles.headerStyle}>Welcome Back</Text>


          <Input
            placeholder='email@uw.edu'
            label='Email'
            name="email"
            inputValue={this.state.email}
            underlineColorAndroid="transparent"
            onChangeText={this.onEmailChange}
            errorMessage= {errors.email}
            errorStyle={{ color: 'red' }}
          />
          <Input
            placeholder='*********'
            label='Password'
            name="password"
            inputValue={this.state.password}
            underlineColorAndroid="transparent"
            onChangeText={this.onPasswordChange}
            errorMessage= {errors.password}
            errorStyle={{ color: 'red' }}
          />
          { errors.general && (
            <Text style={styles.customError}>
            {errors.general}
            </Text>
          )
          }
          <Button
            title="Sign In"
            type="outline"
            buttonStyle={styles.buttonStyle}
            onPress={() => this.onSignInPress()}
          />
        </View>
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
  containerStyle: {
    display: 'flex',
    height: 40+"%",
    width: 80+"%",
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle:{
  },
  headerStyle:{
    fontSize: 30,
    paddingTop: 10,
  },
  buttonStyle:{

  },
  customError:{
    color:'red',
    fontSize: 15
  }
})

SignIn.propTypes = {

}
export default SignIn;
