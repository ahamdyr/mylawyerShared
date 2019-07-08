import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity , Image, Dimensions } from 'react-native';
import { timeDifference } from '../Constants';
import { timer } from '../../../assets'

export default class LockTimer extends React.PureComponent{
  render(){
    const{MainPhotoURL, answeredBy, answerDate, style} = this.props
    return(
      <View style={[styles.container, style]}>
        <Image
          source={timer}
          style={styles.imageStyle}
        />
        <Text style={styles.date}>
          {'23h left to unlock'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //flex: 1,
  },
  imageStyle:{
    width:17,
    height: 17,
  },
  date: {
    marginLeft: 5,
    fontFamily: "Lato-Regular",
    fontSize: 12,
    // fontWeight: "normal",
    // fontStyle: "normal",
    letterSpacing: 0,
    color: "#db3030"
  },
  textContainer:{flexDirection:'column', marginLeft:8.5},
  answerBy:{
    fontFamily:'Lato-Regular',
    fontSize: 12,
    letterSpacing: 0.3,
    color: '#454546',
  },
  answeredBy:{
    fontFamily:'Lato-Bold',
    fontSize: 12,
    letterSpacing: 0.3,
    fontWeight: 'bold',
    color: '#0b7f7c',
    marginLeft: 3
  },  
})