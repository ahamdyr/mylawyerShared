import React from 'react'
import {Image, TouchableWithoutFeedback } from 'react-native';
import {BackArrow} from '../../../assets'

class AuthBackArrow extends React.Component {
  render(){
    return (      
      <TouchableWithoutFeedback onPress={this.props.onPress}>     
        <Image
          style={{width: 9, height: 18.5, marginLeft:16}} 
          source={BackArrow}
        />        
      </TouchableWithoutFeedback>     
    );
  }
}
export default  AuthBackArrow