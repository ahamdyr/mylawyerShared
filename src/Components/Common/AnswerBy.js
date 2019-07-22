import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity , Image, Dimensions } from 'react-native';
import { timeDifference } from '../../Utils/DateTime';
import { defaultPicture } from '../../../assets'

export default class AnswerBy extends React.PureComponent{
  render(){
    const{MainPhotoURL, answeredBy, answerDate, style} = this.props
    return(
      <View style={[styles.container, style]}>
        <Image
          source={ MainPhotoURL ? {uri:MainPhotoURL} : defaultPicture}
          style={styles.imageStyle}
          resizeMode={'cover'}
        />
        <View style={styles.textContainer}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.answerBy}>
              {this.props.lock ? 'Locked By' : 'Answered By'}
            </Text> 
            <Text style={styles.answeredBy}>
              {answeredBy}
            </Text>            
          </View>
          <Text style={styles.date}>
            {timeDifference(answerDate)}
          </Text>
        </View>
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    //flex: 1,
  },
  imageStyle:{
    width:28,
    height: 28,
    borderRadius: 28/2,
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
  date:{
    fontFamily:'Lato-Regular',
    fontSize: 12,
    letterSpacing: 0.3,
    color: '#454546',
  }
})