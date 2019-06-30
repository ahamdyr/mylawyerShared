import React from 'react'
import {Image, TouchableOpacity } from 'react-native';
import {SearchImage} from '../../../assets'

class SearchIcon extends React.Component {
  render(){
    return (      
      <TouchableOpacity 
        activeOpacity={1}
        onPress={this.props.onPress}
        style={this.props.style}
      >   
        <Image
          style={{width: 20, height: 20, marginRight:16}} 
          source={SearchImage}
        />        
      </TouchableOpacity>     
    );
  }
}
export default  SearchIcon