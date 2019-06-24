import React from 'react'
import {Image, TouchableWithoutFeedback } from 'react-native';
import {MenuImage} from '../../../assets'

class MenuIcon extends React.Component {
  render(){
    return (      
      <TouchableWithoutFeedback 
        onPress={this.props.onPress}
        style={this.props.style}
      >     
        <Image
          style={{width: 20, height: 14, marginLeft:17}} 
          source={MenuImage}
        />        
      </TouchableWithoutFeedback>     
    );
  }
}
export default  MenuIcon