import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from "react-native"
import { WIDTH } from '../Constants';
import {blackX} from '../../../assets'
export default class BlackX extends React.PureComponent{
  render(){
    return(
      <TouchableOpacity 
        style={styles.container}
        onPress={this.props.onPress}
      >
          <Image
            source={blackX}
            style={styles.closeIcon}
          />      
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    top: 20,
    right: 16,
  },
  closeIcon:{
    width:16.5,
    height: 16.5,
    borderRadius: 0.8
  }
})