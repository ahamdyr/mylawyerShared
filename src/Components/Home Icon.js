import React from 'react'
import {Image, TouchableWithoutFeedback } from 'react-native';
import {HomeImage} from '../../assets'

class HomeIcon extends React.Component {
  render(){
    return (      
      <TouchableWithoutFeedback onPress={this.props.onPress}>     
        <Image
          style={{width: 19.5, height: 20.5}} 
          source={HomeImage}
        />        
      </TouchableWithoutFeedback>     
    );
  }
}
export default  HomeIcon