import React from 'react'
import {Image, TouchableOpacity } from 'react-native';
import {BackArrow} from '../../../assets'

class AuthBackArrow extends React.Component {
  render(){
    return (      
      <TouchableOpacity 
        activeOpacity={1}
        onPress={this.props.onPress} 
        style={{height:50, width: 70, justifyContent: "center"}}
      >     
        <Image
          style={{width: 9, height: 18.5, marginLeft:16}} 
          source={BackArrow}
        />        
      </TouchableOpacity>     
    );
  }
}
export default  AuthBackArrow