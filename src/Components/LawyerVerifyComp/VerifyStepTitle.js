import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { MAIN_COLOR, WIDTH } from '../Constants'

export default class VerifyStepTitle extends React.PureComponent {
  render() {
    const {
      title,
      subTitle,
      step
    } = this.props
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title} >
          {title}
        </Text>
        <Text style={styles.subTitle}>
          {subTitle}
        </Text>
        <Text style={styles.step}>
          {step}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    //marginTop: 57,
    width: WIDTH,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "Lora-Regular",
    fontSize: 41,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  subTitle: {
    marginTop: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    color: "#b9f9f7"
  },
  step: {
    marginTop: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  },
})