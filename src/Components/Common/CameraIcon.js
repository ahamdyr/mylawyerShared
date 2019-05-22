import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from "react-native"
import { WIDTH, MAIN_COLOR } from '../Constants';
import {camera} from '../../../assets'
export default class Camera extends React.PureComponent{
  render(){
    return(
      <TouchableOpacity 
        //style={styles.container}
        onPress={this.props.onPress}
      >
          <Image
            source={camera}
            style={styles.cameraIcon}
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
  cameraIcon:{
    width:22,
    height: 20,
    //color: MAIN_COLOR
  }
})