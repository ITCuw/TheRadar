import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpUser, logOutUser } from '../redux/actions/userActions';
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
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.ui.errors){
      this.setState({
        errors: nextProps.ui.errors.data,
        loading: nextProps.ui.loading
      });
    }
    if(nextProps.ui.loading){
      this.setState({
        loading: nextProps.ui.loading
      });
    }
  };
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
    this.props.signUpUser(newUserData, navigate);
  };

  render(){
    const { ui: {loading} } = this.props;
    const { errors } = this.state;
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
          autoCorrect = {false}
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
          autoCorrect = {false}
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
          autoCorrect = {false}
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
          autoCorrect = {false}
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
          autoCorrect = {false}
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
        autoCorrect = {false}
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
        autoCorrect = {false}
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
  signUpUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});

const mapActionsToProps = {
  signUpUser
};

export default connect(mapStateToProps, mapActionsToProps)(SignUp);
