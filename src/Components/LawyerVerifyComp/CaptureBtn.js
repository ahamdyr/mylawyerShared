import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { MAIN_COLOR, WIDTH } from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import { photoCamera } from '../../../assets'
import ImageIcon from '../Common/ImageIcon'

export default class CaptureBtn extends React.PureComponent {
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
        <View style={styles.iconContainer}>
          <ImageIcon
            style={styles.photoCameraStyle}
            source={photoCamera}
          />
        </View>
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
    flexDirection: 'row',
    marginTop: 10,
    width: WIDTH - 30,
    height: 56,
    borderRadius: 28,
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 18
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    position: 'absolute',
    left: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  photoCameraStyle: {
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
    color: "#ffffff"
  }
})