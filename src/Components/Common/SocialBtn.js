import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight } from 'react-native';



export default class SocialBtn extends React.PureComponent {
  render() {
    const { style, icon, iconStyle, onPress } = this.props
    return (

      <View
        style={[styles.view, style]}
      >
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={icon}
            style={iconStyle}
          />
        </TouchableOpacity>
      </View>
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