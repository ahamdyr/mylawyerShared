import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class BackBtn extends React.PureComponent {
  render() {
    const {
      onPress
    } = this.props
    return (
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={onPress}
      >
        <Text style={styles.backText}>
          {'Back'}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    right: 156.5,
    bottom: 25.5,
    width: 44,
    height: 44,
    backgroundColor: "rgba(0, 0, 0, 0)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
})