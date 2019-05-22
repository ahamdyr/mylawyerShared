import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView  } from 'react-native';
import {MAIN_COLOR, WIDTH} from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import LoginButton from '../Common/LoginButton'
import MailLogo from '../Common/MailIcon'
import ImageIcon from '../Common/ImageIcon'
import LockImage from '../Common/LockImage'
import {PhoneIcon, UserIcon } from '../../../assets'
import Store from '../../Redux/Store'
import {
  setMail,
  setPassword,
  setUserName,  
} from '../../Redux/Auth/actions'
export default class SignUpWithMailForm extends React.PureComponent {
  mail = '';
  password = '';
  userName = '';
  _onMailChange = (val) =>{
    this.mail = val
    Store.dispatch(setMail(val))
  }
  _onPassChange = (val) => {
    this.password = val
    Store.dispatch(setPassword(val))
  }
  _onNameChange = (val) =>{
    this.userName = val
    Store.dispatch(setUserName(val))
  }
  render(){
    return(
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={'padding'}
      >

        <SeperatorLine />

        <View style={styles.inputContainer}>
          <ImageIcon
            style={styles.userIcon}
            source={UserIcon}
          />
          <TextInput
            //underlineColorAndroid={'transparent'}
            //secureTextEntry
            autoCapitalize={'none'}
            placeholder={'username'}
            keyboardType={'default'}
            style={styles.userNameText}
            onChangeText={this._onNameChange}
          />
        </View>

        <SeperatorLine />

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

        <SeperatorLine />

        <View style={styles.inputContainer}>
          <LockImage/>
          <TextInput
            //underlineColorAndroid={'transparent'}
            autoCapitalize={'none'}
            secureTextEntry            
            placeholder={'***********' }            
            //keyboardType={''}
            style={styles.inputStyle}
            onChangeText={this._onPassChange}
          />
          {/* <Text
            style={styles.forgot}
            //onPress={()=>console.log('ajbfh')}
          >
            Forgot?
          </Text> */}
        </View>

        <SeperatorLine/>

        <LoginButton
          text={'Sign up'}
          style={{
            marginTop: 36
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
  },
  userIcon:{
    width:11,
    height: 16,
    marginLeft: 12
  },
  userNameText:{
    fontFamily:'Lato-Light',
    fontSize: 16,
    marginLeft: 21,
    color: 'white',
    width: 200,
  },
  phoneIconStyle:{
    height: 16,
    width: 16,
    marginLeft: 11.5
  },
  nmberStyle:{
    fontFamily:'Lato-Light',
    fontSize: 16,
    marginLeft: 18.5,
    color: 'white'
  }
})