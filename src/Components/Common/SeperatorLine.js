import React from 'react';
import {View} from 'react-native';

export default class SeperatorLine extends React.PureComponent {
  render(){
    const {style} = this.props
    return(
        <View
          style={[{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            opacity: 0.26,
            width: 230
          },style]}
        />
    )
  }
}