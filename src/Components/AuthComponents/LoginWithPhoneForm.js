import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView  } from 'react-native';
import {MAIN_COLOR, WIDTH} from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import LoginButton from '../Common/LoginButton'
import ImageIcon from '../Common/ImageIcon'
import LockImage from '../Common/LockImage'
import {PhoneIcon, UserIcon } from '../../../assets'
import { isValidPhoneNumber } from '../../Utils/InputValidation'
import Store from '../../Redux/Store'
import { setPhoneNumber } from '../../Redux/Auth/actions'
export default class LoginWithPhoneForm extends React.PureComponent {
  phone = '';  
  _onPhoneChange = (val) => {
    this.phone = val
    Store.dispatch(setPhoneNumber(val))
  }
  _loginSubmit = () =>{
    if (!isValidPhoneNumber(this.phone)) {
      alert('Provide valid phone number !')
    }
    else {
      this.props.onPress(this.phone)
    }
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
            blurOnSubmit={true}
            underlineColorAndroid={'transparent'}
            placeholder={'+20 123 456 7890' }            
            keyboardType={'phone-pad'}
            style={styles.nmberStyle}
            placeholderTextColor={'#ffffff'}
            onChangeText={this._onPhoneChange}
          />
        </View>

        <SeperatorLine/>

        <LoginButton
          text={'Login'}
          style={{
            marginTop: 26
          }}
          onPress={()=>this._loginSubmit()}
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