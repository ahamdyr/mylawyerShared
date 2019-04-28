import React from 'react'
import {Image, TouchableWithoutFeedback, Text } from 'react-native';
import {HomeImage} from '../../../assets'

class HomeIcon extends React.Component {
  render(){
    return (      
      <TouchableWithoutFeedback onPress={this.props.onPress}>     
        <React.Fragment>
        <Image
          style={{width: 19.5, height: 20.5}} 
          source={HomeImage}
        />
        {
          this.props.focused?
          <Text style={{
            marginBottom:-16,
            marginTop:-4,
            fontWeight:'bold',
            color:'#0b7f7c',
            fontSize: 16
          }}>___________</Text>
          :null
        }        
        </React.Fragment>
      </TouchableWithoutFeedback>     
    );
  }
}
export default  HomeIcon