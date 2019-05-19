import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import {STATUS_BAR_HEIGHT, WIDTH, HEIGHT} from '../Constants'
import DropdownMenu from 'react-native-dropdown-menu';

export default class SelectComponent extends React.PureComponent {
  state={
    language:'c#',
    text:''
  }
  render(){
    return(
      <View style={[styles.selectContainer, this.props.style]}> 
        
          <Image 
            source={require('../../../assets/topic.png')}
            style={styles.topicIcon}
          />
          <Text style={styles.filterText}>
            ALL TOPICS
          </Text>

          <Image 
            source={require('../../../assets/arrow3x.png')}
            style={styles.downArrow}
          />         
          
          {/* <View
            style={{
              borderBottomColor: '#d5d5e0',
              borderBottomWidth: 0.5,
            }}
          />         */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectContainer : {
    width: WIDTH,
    height: 55 ,
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 0.5
  },
  topicIcon:{
    width:10.5,
    height: 14.5,
    marginLeft: 18.5,
    marginTop: 20
  },
  downArrow:{
    width:11,
    height: 6,
    position:'absolute',
    right:15,
    top:24
  },
  filterText:{
    fontFamily:'Lato-Bold',
    fontSize: 14,
    letterSpacing: 0.35,
    color: '#0b7f7c',
    marginTop: 20,
    marginLeft: 14.5
  }
})