import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  WIDTH
} from '../Constants'
export default class SideMenuBtn extends React.PureComponent {
  render() {
    const {
      btnTitle,
      onPress,
      style,
      textStyle
    } = this.props
    return (
      <TouchableOpacity
        style={[styles.btnContainer, style]}
        onPress={onPress}
      >
        <Text style={[styles.nextText, textStyle]}>
          {btnTitle}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    // position: 'absolute',
    // right: 15,
    // bottom: 20,
    width: WIDTH,
    height: 60,
    backgroundColor: "transparent",    
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontFamily: "Lato-Light",
    fontSize: 28,
    fontWeight: '300',
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#0b7f7c"
  },
})