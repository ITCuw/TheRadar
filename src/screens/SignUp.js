import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet, AsyncStorage } from 'react-native';
import propTypes from 'prop-types';
import axios from 'axios';
//react native elements imports
import { Input, Button } from 'react-native-elements';

class SignUp extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password:'',
      confirmPassword:'',
      interest:'',
      loading: false,
      errors: {}
    }
  }
  // onChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.inputValue
  //   });
  // }
  onFirstNameChange = firstName => {
    this.setState({ firstName });
  };

  onLastNameChange = lastName => {
    this.setState({ lastName });
  };

  onAgeChange = age => {
    this.setState({ age });
  };

  onEmailChange = email => {
    this.setState({ email });
  };

  onPasswordChange = password => {
    this.setState({ password });
  };

  onConfirmPasswordChange = confirmPassword => {
    this.setState({ confirmPassword });
  };

  onInterestChange = interest => {
    this.setState({ interest });
  };

  onSignUpPress(){
    const {navigate} = this.props.navigation;
    this.setState({
      loading: true,
      errors: {}
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      interest: this.state.interest,
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      age: this.state.age,
    };
    axios.post('https://us-central1-theradar-6242d.cloudfunctions.net/api/signUp', newUserData)
      .then(res => {
        console.log(res.data);
        this.setState({
          loading: false,
        });
        const storeToken = async () => {
              try {
                 await AsyncStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
              } catch (error) {
                console.log("Something went wrong", error);
              };
            };
        storeToken();
        navigate('Channels');
      })
      .catch(err => {
        console.log(err)
        this.setState({
          errors: err.response.data,
          loading: false
        });
      });
  };

  render(){
    const { errors, loading } = this.state;
    return(
      <View style={styles.body}>
      <View style={styles.containerStyle}>
        <Text style={styles.headerStyle}>Welcome to TheRadar</Text>
        <Input
          placeholder='John'
          label='First Name'
          name="firstName"
          id="firstname"
          inputValue={this.state.firstName}
          underlineColorAndroid="transparent"
          onChangeText={this.onFirstNameChange}
          errorMessage= {errors.firstName}
          errorStyle={{ color: 'red' }}
          autoCapitalize = 'none'
          autoCorrect = 'false'
        />
        <Input
          placeholder='Smith'
          label='Last Name'
          name="lastName"
          inputValue={this.state.lastName}
          underlineColorAndroid="transparent"
          onChangeText={this.onLastNameChange}
          errorMessage= {errors.lastName}
          errorStyle={{ color: 'red' }}
          autoCapitalize = 'none'
          autoCorrect = 'false'
        />
        <Input
          placeholder='20'
          label='Age'
          name="age"
          inputValue={this.state.age}
          underlineColorAndroid="transparent"
          onChangeText={this.onAgeChange}
          errorMessage= {errors.age}
          errorStyle={{ color: 'red' }}
          autoCapitalize = 'none'
          autoCorrect = 'false'
        />
        <Input
          placeholder='email@uw.edu'
          label='Email'
          name="email"
          inputValue={this.state.email}
          underlineColorAndroid="transparent"
          onChangeText={this.onEmailChange}
          errorMessage= {errors.email}
          errorStyle={{ color: 'red' }}
          autoCapitalize = 'none'
          autoCorrect = 'false'
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
          autoCapitalize = 'none'
          autoCorrect = 'false'
        />
        <Input
        placeholder='*********'
        label='Confirm Password'
        name="confirmPassword"
        inputValue={this.state.confirmPassword}
        underlineColorAndroid="transparent"
        onChangeText={this.onConfirmPasswordChange}
        errorMessage= {errors.confirmPassword}
        errorStyle={{ color: 'red' }}
        autoCapitalize = 'none'
        autoCorrect = 'false'
        />
        <Input
        placeholder='fishing'
        label='interest'
        name="interest"
        inputValue={this.state.interest}
        underlineColorAndroid="transparent"
        onChangeText={this.onInterestChange}
        errorMessage= {errors.interest}
        errorStyle={{ color: 'red' }}
        autoCapitalize = 'none'
        autoCorrect = 'false'
        />
        <Button
          title="Sign Up"
          type="outline"
          buttonStyle={styles.buttonStyle}
          onPress={() => this.onSignUpPress()}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerStyle: {
    display: 'flex',
    height: 90+"%",
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

  }
})

SignUp.propTypes = {

}

export default SignUp;
