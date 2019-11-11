import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Channel = props => {

  const style = [];
    style.push(styles.containerStyle)
    if (props.last){
      style.push({borderBottomWidth: StyleSheet.hairlineWidth})
    }

  return(
    <View style={style}>
      <Text style={styles.textStyle}> {props.name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    height: 80,
    width: 100+'%',
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
  }
})

export default Channel;
