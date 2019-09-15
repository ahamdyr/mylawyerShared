import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import ImageIcon from './ImageIcon';
import { lawyerIcon, edit } from '../../../assets';
import { WIDTH } from '../Constants'

export default class SwitchBtn extends React.PureComponent {
  render() {
    const { style, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        <ImageIcon style={styles.lawyerIcon} source={lawyerIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.upperText}>{'Are you a lawyer?'}</Text>
          <Text style={styles.lowerText}>{'Switch your account now!'}</Text>          
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    //width: WIDTH - 60,
    height: 65,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: '#0b7f7c',
    flexDirection: 'row',
    alignItems: "center",
    //justifyContent: 'space-around'
  },
  lawyerIcon: {
    width: 26,
    height: 38,
    marginLeft: 24,
  },
  textContainer: {
    justifyContent: "space-between",
    marginLeft: 24,
  },
  upperText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 20,
    color: "#ffffff"
  },
  lowerText: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
    color: "#ffffff"
  },
})