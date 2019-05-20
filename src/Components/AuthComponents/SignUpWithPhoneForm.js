import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView  } from 'react-native';
import {MAIN_COLOR, WIDTH} from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import LoginButton from '../Common/LoginButton'
import MailLogo from '../Common/MailIcon'
import ImageIcon from '../Common/ImageIcon'
import {PhoneIcon, UserIcon } from '../../../assets'
import Store from '../../Redux/Store'
import {
  setMail,
  setPassword,
  setPhoneNumber
} from '../../Redux/Auth/actions'
export default class SignUpWithPhoneForm extends React.PureComponent {
  mail = '';
  phone = '';
  userName = '';
  _onMailChange = (val) =>{
    this.mail = val
  }
  _onPhoneChange = (val) => {
    this.phone = val
    Store.dispatch(setPhoneNumber(val))
  }
  _onNameChange = (val) =>{
    this.userName = val
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

        {/* <SeperatorLine />

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
        </View> */}

        <SeperatorLine />

        <View style={styles.inputContainer}>
          <ImageIcon
            style={styles.phoneIconStyle}
            source={PhoneIcon}
          />
          <TextInput            
            //underlineColorAndroid={'transparent'}
            placeholder={'+20 100 712 1821' }            
            keyboardType={'phone-pad'}
            style={styles.nmberStyle}
            autoFocus
            onChangeText={this._onPhoneChange}
          />
        </View>

        <SeperatorLine />
        
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
    width: 250,
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
    color: 'white',
    width: 200,
  }
})