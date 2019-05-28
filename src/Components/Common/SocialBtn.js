import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';



export default class SocialBtn extends React.PureComponent {
  render() {
    const { style, icon, iconStyle, onPress } = this.props
    return (
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.view, 
            style
          ]}
        >
          <Image
            source={icon}
            style={iconStyle}
          />
        </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  view: {
    height: 56,
    width: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  }
})