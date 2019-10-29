import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import { Channel } from '../Components';

  const channelData = [
    {
      name: "Athletes",
    },
    {
      name: "Everyone",
    },
  ]

class Channels extends Component {
  static navigationOptions = {
    header: null
  };

  render(){
    const lastIndex = channelData.length - 1;
    return(
      <View style={styles.container}>
        {
          channelData.map((channel, i)=>{
            const last = i === lastIndex;
            return <Channel last={last} {...channel}/>
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100+"%",
    height: 100+"%",
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",

  }
});

export default Channels;
