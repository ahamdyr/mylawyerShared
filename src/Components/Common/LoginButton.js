import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';



export default class LoginButton extends React.PureComponent {
  render() {
    const { style, text, textStyle, onPress } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[{
          width: 230,
          height: 52,
          borderRadius: 22.5,
          backgroundColor: '#f5faf0',
          elevation: 20,
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 4,
            height: 6.9
          },
          alignItems: 'center',
          justifyContent: 'center'
        }, style]}
      >
        <Text style={[{
          fontFamily: 'Lato-Bold',
          fontSize: 16,
          color: '#0a0a09'
        }, textStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}
