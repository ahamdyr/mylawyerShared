import React from 'react';
import { Image, TouchableWithoutFeedback, View } from "react-native"
import { WIDTH } from '../Constants';
import {blackX} from '../../../assets'
export default class BlackX extends React.PureComponent{
  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={{height:50}}>
          <Image
            source={blackX}
            style={this.props.style}
          />
        </View>        
      </TouchableWithoutFeedback>
    )
  }
}