import React from 'react'
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BackArrow } from '../../../assets'

export default class BackIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.BtnStyle, this.props.style]}
      >
        <Image
          style={styles.imageStyle}
          source={BackArrow}
        />
        <Text style={styles.textStyle}>
          Back
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  BtnStyle : {
    width: 80,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 21, width: 12
  },
  textStyle: {
    marginLeft: 5,
    fontFamily: "NunitoSans-Regular",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  }
})