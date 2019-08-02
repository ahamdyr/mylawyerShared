import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../Constants'
export default class SaveIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.BtnStyle}
      >
        <Text style={styles.textStyle}>
          Save
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  }
})