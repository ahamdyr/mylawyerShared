import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, Keyboard  } from 'react-native';
import {MAIN_COLOR, WIDTH} from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import LoginButton from '../Common/LoginButton'
import MailLogo from '../Common/MailIcon'
import LockImage from '../Common/LockImage'
import Store from '../../Redux/Store'
import {
  setMail,
  setPassword
} from '../../Redux/Auth/actions'
export default class LoginWithMailForm extends React.PureComponent {
  mail = '';
  password = '';
  _onMailChange = (val) =>{
    this.mail = val
    Store.dispatch(setMail(val))
  }
  _onPassChange = (val) => {
    this.password = val
    Store.dispatch(setPassword(val))
  }
  _loginSubmit = () =>{
    this.props.onPress
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
            autoCapitalize={'none'}
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
            enablesReturnKeyAutomatically={true}
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
          onPress={this.props.onPress}
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
    color: 'white',
    width: 200,
  },
  forgot:{
    fontFamily:'Lato-Light',
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    right: 0
  }
})