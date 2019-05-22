import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Keyboard , ScrollView, TextInput, Platform } from 'react-native';
import {STATUS_BAR_HEIGHT, WIDTH, HEIGHT, MAIN_COLOR} from '../Constants'
import SeperatorLine  from '../Common/SeperatorLine'
import KeyboardSpacer from 'react-native-keyboard-spacer'

export default class QuestionComponent extends React.PureComponent {
  _titleChange = (val) =>{

  }
  _bodyChange = (val) =>{

  }
  render(){
    return(
      <TouchableOpacity
        style={styles.questionContainer}
        onPress = {()=>Keyboard.dismiss}
      > 
        
          <View style={styles.title}>
            <TextInput
              style={styles.titleText}
              underlineColorAndroid="transparent"
              placeholder={'Title '}
              onChangeText={this._titleChange}
              autoFocus
              shouldCancelWhenOutside ={true}
            />
          </View>  
          <SeperatorLine style={styles.seperator}/>
          <ScrollView  style={styles.body} keyboardShouldPersistTaps={'handled'}>
            <TextInput
              style={styles.bodyText}
              
              underlineColorAndroid="transparent"
              placeholder={'Write your problem here'}
              onChangeText={this._bodyChange}
              multiline={true}
              shouldCancelWhenOutside ={true}
            />
          </ScrollView >  
          { 
            Platform.OS === 'android' ? 
            <KeyboardSpacer 
              style={styles.keyBad} 
              topSpacing={-110}              
            /> 
            : null 
          }
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  questionContainer : {    
    //flex: 1,
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    height: 450,
    backgroundColor: 'white',
    elevation: 16,
    shadowOpacity: 0.5
    
  },
  title:{
    height: 51,
    width:WIDTH - 72,    
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText:{    
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    fontSize: 16,
    color: MAIN_COLOR
  },
  body:{
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  bodyText:{
    fontFamily: 'Lato-Regular',
    letterSpacing: 0.4,
    fontSize: 16,
    color: '#74747a',
    alignSelf: 'center',
    marginTop: 21
  },
  seperator: {
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 1,
    //opacity: 0.26,
    width: WIDTH - 80
  },
  keyBad:{
    //marginTop: -30
  }
})