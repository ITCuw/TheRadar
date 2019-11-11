import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Input, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
// REDUX STUFF
import { connect } from 'react-redux';
import { signInUser } from '../redux/actions/userActions';

class SignIn extends Component {
  static navigationOptions = {
    title: 'Log In',
  };

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {},
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

  onEmailChange = email => {
    this.setState({ email });
  };
  onPasswordChange = password => {
    this.setState({ password });
  };
  onTextPress(){
    const {navigate} = this.props.navigation;
    navigate('SignUp');
  }
  onSignInPress(){
    const {navigate} = this.props.navigation;
    this.setState({
      loading: true,
      errors: {},
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signInUser(userData, navigate);
  };

  render(){
    const { ui: {loading} } = this.props;
    const { errors } = this.state;

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
            autoCapitalize = 'none'
            autoCorrect = {false}
            selectionColor= 'rgb(254, 100, 100)'
          />
          <Input
            placeholder='*********'
            label='Password'
            name="password"
            inputValue={this.state.password}
            underlineColorAndroid="transparent"
            onChangeText={this.onPasswordChange}
            isFocused= {false}
            errorMessage= {errors.password}
            errorStyle={{ color: 'red' }}
            autoCapitalize = 'none'
            autoCorrect = {false}
            selectionColor= 'rgb(254, 100, 100)'
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
            disabled= {this.state.loading}
            loading={this.state.loading}
          />
          <Text>
          <Text>Don't have an account? </Text><Text style={styles.textLink} onPress={() => this.onTextPress()}>sign up</Text>
          </Text>
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
  },
  textLink:{
    color: 'blue',
    textDecorationLine: 'underline'
  }
})

SignIn.propTypes = {
  signInUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});

const mapActionsToProps = {
  signInUser
};

export default connect(mapStateToProps, mapActionsToProps)(SignIn);
