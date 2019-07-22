import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity , Image, Dimensions } from 'react-native';
import { WIDTH } from '../Constants';
import {topic} from '../../../assets'
export default class Topic extends React.PureComponent{
  render(){
    const {authorName, topicName, title} = this.props
    return(
      <View style={[styles.container, this.props.style]}>

        <View style={styles.upper}>

          <Text style={styles.authorNameStyle}>
            By {authorName}
          </Text>
          <View style={styles.right}>
            <Image
              source={topic}
              style={styles.topicIcon}
            />

            <Text style={styles.indexStyle}>
              {topicName}
            </Text>
          </View>
        </View>

        <View style={styles.lower}>

          <Text style={styles.contentStyle}>
            {title}
          </Text>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    width: WIDTH,
    backgroundColor: 'white'
  },
  upper:{
    flexDirection:'row',
    marginBottom: 18,
  },
  lower:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  authorNameStyle:{
    fontFamily:'Lato-Regular',
    fontSize: 12,
    letterSpacing: 0.3,
    color: '#454546',
    marginTop: 15,
    marginLeft: 17.5,
  },
  right:{
    position: 'absolute',
    right: 12,
    top: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topicIcon:{
    width:7.5,
    height: 10.5,
    marginRight: 8  
    // position: 'absolute',
    // right: 58.5,
    // top: 18

  },
  indexStyle:{
    fontFamily:'Lato-Regular',
    fontSize:12,
    letterSpacing: 0.3,
    color: '#0b7f7c',
    // position: 'absolute',
    // right: 12,
    // top: 15
  },
  contentStyle:{
    fontFamily:'Cairo-Bold',
    fontSize: 18,
    color: '#0b7f7c',
    marginHorizontal:15.5
  }
})