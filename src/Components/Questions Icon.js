import React from 'react'
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import {QuestionsImage} from '../../assets'

class QuestionsIcon extends React.Component {
  render(){
    return ( 
       
      <TouchableWithoutFeedback onPress={this.props.onPress}>     
        <Image
          style={{width: 20, height: 20}} 
          source={QuestionsImage}
        />        
      </TouchableWithoutFeedback>  
      
    );
  }
}
export default  QuestionsIcon