import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { MAIN_COLOR, WIDTH } from '../Constants'

export default class ProgressBar extends React.PureComponent {
  render() {
    const {
      step
    } = this.props
    return (
      <View style={styles.Container}>
        <View style={step == 1 ? styles.focused : styles.unFocused}/>
        <View style={step == 2 ? styles.focused : styles.unFocused}/>
        <View style={step == 3 ? styles.focused : styles.unFocused}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    left: 15,
    bottom: 44,    
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  focused: {    
    marginHorizontal: 10,
    width: 30,
    height: 8,
    borderRadius: 13,
    backgroundColor: "#ffffff",    
  },
  unFocused: {
    marginHorizontal: 10,
    width: 8,
    height: 8,
    opacity: 0.4,
    borderRadius: 13,
    backgroundColor: "#ffffff"
  }
})