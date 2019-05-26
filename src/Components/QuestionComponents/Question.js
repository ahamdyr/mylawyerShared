import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View,TouchableOpacity, Keyboard , ScrollView, TextInput, Platform } from 'react-native';
import {STATUS_BAR_HEIGHT, WIDTH, HEIGHT, MAIN_COLOR} from '../Constants'
import SeperatorLine  from '../Common/SeperatorLine'
import KeyboardSpacer from 'react-native-keyboard-spacer'

export default class QuestionComponent extends React.PureComponent {
  _titleChange = (val) => {

  }
  _bodyChange = (val) => {

  }
  _titleKeyBoardToggle = ()=> {
    if(this._titleRef.isFocused()){
      Keyboard.dismiss()
    }
    else{
      this._titleRef.focus()
    }
  }
  _bodyKeyBoardToggle = () => {
    if (this._bodyRef.isFocused()) {
      Keyboard.dismiss()
    }
    else {
      this._bodyRef.focus()
    }
  }
  render(){
    return(
      <View
        style={styles.questionContainer}
      > 
        <TouchableOpacity
            activeOpacity={1}
            style={styles.title}            
            onPress={()=>this._titleKeyBoardToggle()}>
            <TextInput
              ref={(ref) => this._titleRef = ref}
              style={styles.titleText}
              underlineColorAndroid="transparent"
              placeholder={'Title '}
              onChangeText={this._titleChange}
              autoFocus
              shouldCancelWhenOutside ={true}
            />
        </TouchableOpacity>

          <SeperatorLine style={styles.seperator}/>

        <TouchableOpacity  
            activeOpacity={1}
            style={[styles.body]}
            onPress={()=>this._bodyKeyBoardToggle()}>
          <ScrollView  
            style={styles.body} 
          >
            <TextInput
              style={styles.bodyText}
              ref={(ref) => this._bodyRef = ref}              
              underlineColorAndroid="transparent"
              placeholder={'Write your problem here'}
              onChangeText={this._bodyChange}
              multiline={true}
              shouldCancelWhenOutside ={true}
            />
          </ScrollView >  
        </TouchableOpacity> 
          { 
            Platform.OS === 'android' ? 
            <KeyboardSpacer 
              style={styles.keyBad} 
              topSpacing={-110}              
            /> 
            : null 
          }
      </View>
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
    marginRight: 20
  },
  bodyText:{
    fontFamily: 'Lato-Regular',
    letterSpacing: 0.4,
    fontSize: 16,
    color: '#74747a',
    alignSelf: 'center',
    width: 250,
    marginTop: 21
  },
  seperator: {
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 1,
    alignSelf: 'center',
    //opacity: 0.26,
    width: WIDTH - 80
  },
  keyBad:{
    //marginTop: -30
  }
})