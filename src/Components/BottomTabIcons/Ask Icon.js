import React from 'react'
import {Text, View,TouchableWithoutFeedback } from 'react-native';
//import {AskImage} from '../../assets'

class AskIcon extends React.Component {
  render(){
    return (   
      // <TouchableWithoutFeedback onPress={this.props.onPress}>   
        <View
          style={{
            width: 44,
              height: 44,
              borderRadius: 44 / 2,
              backgroundColor: '#0b7f7c',
              paddingVertical:10,
              justifyContent: 'center',
              alignItems: 'center'
          }}
          onPress={this.props.onPress}
        >
          <Text
            style={{              
              alignSelf:'auto',
              fontWeight:'bold',
              color:'#fff'
            }}
          >
            {"ASK"}
          </Text>
        </View>
      // </TouchableWithoutFeedback>  
    );
  }
}
export default  AskIcon