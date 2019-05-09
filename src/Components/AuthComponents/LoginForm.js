import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView  } from 'react-native';
import {MAIN_COLOR, WIDTH} from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import LoginButton from '../Common/LoginButton'
import MailLogo from '../Common/MailIcon'
import LockImage from '../Common/LockImage'
export default class LoginForm extends React.PureComponent {
  mail = '';
  password = '';
  _onMailChange = (val) =>{
    this.mail = val
  }
  _onPassChange = (val) => {
    this.password = val
  }
  render(){
    return(
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={'padding'}
      >

        <SeperatorLine/>

        <View style={styles.inputContainer}>
          <MailLogo/>
          <TextInput            
            //underlineColorAndroid={'transparent'}
            placeholder={'name@mail.com' }            
            keyboardType={'email-address'}
            style={styles.inputStyle}
            autoFocus
            onChangeText={this._onMailChange}
          />
        </View>

        <SeperatorLine/>

        <View style={styles.inputContainer}>
          <LockImage/>
          <TextInput
            //underlineColorAndroid={'transparent'}
            secureTextEntry
            placeholder={'***********' }            
            //keyboardType={''}
            style={styles.inputStyle}
            onChangeText={this._onPassChange}
          />
          <Text
            style={styles.forgot}
            //onPress={()=>console.log('ajbfh')}
          >
            Forgot?
          </Text>
        </View>

        <SeperatorLine/>

        <LoginButton
          text={'Login'}
          style={{
            marginTop: 26
          }}
          //onPress={}
        />

      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems : 'center',
  },
  inputContainer:{
    width: 230,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle:{
    fontFamily:'Lato-Light',
    fontSize: 16,
    marginLeft: 16,
    color: 'white'
  },
  forgot:{
    fontFamily:'Lato-Light',
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    right: 0
  }
})