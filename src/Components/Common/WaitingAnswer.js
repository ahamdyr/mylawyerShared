import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity , Image, Dimensions } from 'react-native';
import {waiting} from '../../../assets'
export default class WaitingAnswer extends React.PureComponent{
  render(){
    return(
      <View style={[styles.container, this.props.style]}>
        <Image
          source={waiting}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>
          Waiting for Lawyers Answers
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 19,
    marginBottom: 17
  },
  imageStyle:{
    width: 9.5,
    height: 13,
    marginRight: 4
  },
  textStyle:{
    fontFamily:'Lato-Regular',
    fontSize: 12,
    letterSpacing: 0.3,
    color: '#0b7f7c',
  }
})