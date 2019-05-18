import React from 'react';
import { Image, TouchableWithoutFeedback, View } from "react-native"
import { WIDTH } from '../Constants';
import {close} from '../../../assets'
export default class CloseIcon extends React.PureComponent{
  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={{height:50}}>
          <Image
            source={require('../../../assets/icons8-delete-filled-50.png')}
            style={this.props.style}
          />
        </View>        
      </TouchableWithoutFeedback>
    )
  }
}