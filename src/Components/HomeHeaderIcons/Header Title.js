import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native';

class HeaderTitle extends React.Component {
  
  render(){
    return (      
      <TouchableWithoutFeedback >     
        <Text
          style = {{
            // width: 97.5, 
            // height: 18.5, 
            alignContent:'center',
            // paddingLeft:20 , 
            color:'#0b7f7c',
            fontSize:20  ,
            fontFamily:'LuxiSerif'  ,
            //fontWeight:'bold'
          }}          
        >
          {this.props.title}
        </Text>        
      </TouchableWithoutFeedback>     
    );
  }
}
export default  HeaderTitle