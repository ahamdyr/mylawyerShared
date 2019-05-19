import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView  } from 'react-native';
import {MAIN_COLOR, WIDTH} from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import LoginButton from '../Common/LoginButton'
import ImageIcon from '../Common/ImageIcon'
import LockImage from '../Common/LockImage'
import {PhoneIcon, UserIcon } from '../../../assets'
export default class LoginWithPhoneForm extends React.PureComponent {
  mail = '';
  password = '';
  _onMailChange = (val) =>{
    this.mail = val
  }
  _onPassChange = (val) => {
    this.password = val
  }
  _loginSubmit = () =>{
    // check mail and password valid
    // check credentials
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
          onPress={this._loginSubmit}
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
  nmberStyle:{
    fontFamily:'Lato-Light',
    fontSize: 16,
    marginLeft: 18.5,
    color: 'white',
    width: 200,
  },
  phoneIconStyle:{
    height: 16,
    width: 16,
    marginLeft: 11.5
  },
})