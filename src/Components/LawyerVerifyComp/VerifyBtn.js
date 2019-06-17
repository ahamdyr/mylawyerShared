import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class VerifyBtn extends React.PureComponent {
  render() {
    const {
      btnTitle,
      onPress
    } = this.props
    return (
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={onPress}
      >
        <Text style={styles.nextText}>
          {btnTitle}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    right: 15,
    bottom: 20,
    width: 131,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 18
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#0b7f7c"
  },
})