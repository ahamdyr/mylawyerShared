import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { MAIN_COLOR, WIDTH } from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import { rightArrowIcon } from '../../../assets'
import ImageIcon from '../Common/ImageIcon'
export default class SelectMajorBtn extends React.PureComponent {
  render() {
    const {
      major,
      onPress
    } = this.props
    return (
      <TouchableOpacity 
        style={styles.btnContainer}
        //onPress={onPress}
      >
        <View style={styles.majorContainer}>
          <Text style={styles.majorText}>
            {major || 'Select your major…'}
          </Text>
          <ImageIcon 
            style={styles.rightStyle}
            source={rightArrowIcon}
          />
        </View>
        <SeperatorLine 
          style={styles.line}
        />        
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 203,
    width: WIDTH - 30,
    height: 45,
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  majorContainer:{
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  majorText: {
    fontFamily: "Lora-Regular",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  },
  rightStyle: {
    width: 19,
    height: 19,    
    position: 'absolute',
    end: 0
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
  line:{
    width: WIDTH - 30,
    marginTop: 15
  }
})