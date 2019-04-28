import React from 'react'
import {Image, TouchableWithoutFeedback } from 'react-native';
import {SearchImage} from '../../../assets'

class SearchIcon extends React.Component {
  render(){
    return (      
      <TouchableWithoutFeedback onPress={this.props.onPress}>     
        <Image
          style={{width: 20, height: 20, marginRight:16}} 
          source={SearchImage}
        />        
      </TouchableWithoutFeedback>     
    );
  }
}
export default  SearchIcon