import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
 TouchableOpacity,
Image } from 'react-native';
 import {PostIcon} from '../Img/icons/post.png';
 import {ReplyIcon} from '../Img/icons/reply.png';

import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import{
  Avatar,
  FlatFeed,
  Activity,
  LikeButton,
  ReactionIcon, } from 'react-native-activity-feed';
//getstream
import { StreamApp } from 'react-native-activity-feed';
import config from '../../config';

class Feed extends Component {
  _isMounted = false;

  static navigationOptions = ({ navigation }) => {
      const { navigate } = navigation;
      return{
        title: 'feed',
        headerRight: (
                    <TouchableOpacity
                      onPress={()=>navigate('NewPost')}
                      style={{ paddingRight: 15 }}
                    >
                      <Image source={PostIcon} style={{ width: 23, height: 23 }} />
                    </TouchableOpacity>

                 ),
               }
  };

  constructor(props) {
  	super(props);

  	this.state = {
  		gsToken: null,
  		isLoading: true
  	};
  }

  componentDidMount() {
    this._isMounted = true;
        const gsToken = this.getGsToken();
        console.log('Here is token in mount:' + JSON.stringify(gsToken));
        if(this._isMounted){
        this.setState({
          gsToken: gsToken,
          isLoading: false
        });
      };
  	};

    componentWillUnmount() {
      this._isMounted = false;
    }

    async getGsToken() {
      let gsToken;
          try {
             gsToken = await AsyncStorage.getItem('gsToken');
             console.log(JSON.stringify(gsToken));
             return gsToken;
          } catch (error) {
            console.log("Could not get Feed Token: " + error);
          };
        };

  render(){
    if (!this.state.isLoading){
      console.log('Here is the token in the render method: ' + JSON.stringify(this.state.gsToken));
      return(
        <SafeAreaView
  				style={[{ flex: 1 }, { backgroundColor: '#FFFFFF' }]}
  				forceInset={{ top: 'always' }}
  			>
            <FlatFeed
              feedGroup="timeline"
              options={{
                limit: 10,
              }}
              notify
              navigation={this.props.navigation}
              Activity={(props) => (
                <TouchableOpacity
                  onPress={() => this._onPressActivity(props.activity)}
                >
                  <Activity
                    {...props}
                    Footer={
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <LikeButton {...props} />

                        <ReactionIcon
                          icon={ReplyIcon}
                          labelSingle="comment"
                          labelPlural="comments"
                          counts={props.activity.reaction_counts}
                          kind="comment"
                        />
                      </View>
                    }
                  />
                </TouchableOpacity>
              )}
            />
        </SafeAreaView>
      );
    } else {
      return (
          <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: 'always' }}>
            <View style={{ flex: 1, padding: 100 }}>
              <ActivityIndicator />
            </View>
          </SafeAreaView>
        );
    }
}
}

const styles = StyleSheet.create({

});

export default Feed;
