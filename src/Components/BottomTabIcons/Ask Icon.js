import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
//import {AskImage} from '../../assets'

class AskIcon extends React.Component {
  render() {
    return (
      // <TouchableWithoutFeedback onPress={this.props.onPress}>   
      <TouchableOpacity
        style={[{
          width: 44,
          height: 44,
          borderRadius: 44 / 2,
          backgroundColor: '#0b7f7c',
          //paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }, this.props.style]}
        onPress={this.props.onPress}
        activeOpacity={1}
      >
        <Text
          style={[{
            alignSelf: 'auto',
            fontWeight: 'bold',
            color: '#fff'
          }, this.props.textStyle]}
        >
          {this.props.text || "ASK"}
        </Text>
      </TouchableOpacity>
      // </TouchableWithoutFeedback>  
    );
  }
}
export default AskIcon