import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from "react-native"
import { WIDTH } from '../Constants';
import {blackX} from '../../../assets'
export default class BlackX extends React.PureComponent{
  render(){
    return(
      <TouchableOpacity 
        style={[styles.container, this.props.style]}
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
    top: 0,
    right: 0,
    width: 100,
    height: 70,
    //backgroundColor: 'red'
  },
  closeIcon:{
    position: 'absolute',
    top: 20,
    right: 16,
    width:16.5,
    height: 16.5,
    borderRadius: 0.8
  }
})