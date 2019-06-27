import React from 'react';
import { Text } from 'react-native';

export default class StatusText extends React.PureComponent {
  render() {
    var { text, style } = this.props
    return (
      <Text style={[{
        fontSize: 16,
        color: '#0b7f7c',
      },style]}>
        {text}
      </Text>
    )
  }
}