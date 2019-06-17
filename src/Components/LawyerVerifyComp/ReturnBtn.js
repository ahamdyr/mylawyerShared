import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { MAIN_COLOR, WIDTH } from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import { upload } from '../../../assets'
import ImageIcon from '../Common/ImageIcon'

export default class ReturnBtn extends React.PureComponent {
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
        <Text style={styles.btnText}>
          {btnTitle}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    // position: 'absolute',
    // bottom: 217,
    //marginTop: 203,
    flexDirection: 'row',
    width: WIDTH-30,
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    position: 'absolute',
    left: 15,
    width: 30,
    height: 30,    
    justifyContent: 'center',
  },
  uploadStyle:{
    width: 24,
    height: 24,  
  },
  btnText: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#0b7f7c",
  }
})