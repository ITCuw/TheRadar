import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Input, Button} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

class Profile extends Component {
  onSettingsClick() {
    const {navigate} = this.props.navigation;
    console.log('Works!');
    navigate('ProfileSettings');
  }

  render() {
    var {
      classes,
      user: {
        credentials: {email, interest, lastName, firstName},
        loading,
      },
    } = this.props;
    return (
      <View style={styles.body}>
        <Avatar
          rounded
          size="large"
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          onPress={() => this.onSettingsClick()}
          activeOpacity={0.7}
        />
      </View>
    );
  }
}
var mapStateToProps = state => ({
  user: state.user,
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

var styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
