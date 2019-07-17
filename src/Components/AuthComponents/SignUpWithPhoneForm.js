import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView  } from 'react-native';
import {MAIN_COLOR, WIDTH, STATUS_BAR_HEIGHT} from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import LoginButton from '../Common/LoginButton'
import MailLogo from '../Common/MailIcon'
import ImageIcon from '../Common/ImageIcon'
import {PhoneIcon, UserIcon } from '../../../assets'
import { isValidPhoneNumber } from '../../Utils/InputValidation'
import Store from '../../Redux/Store'
import {
  setUserName,
  setPhoneNumber
} from '../../Redux/Auth/actions'
export default class SignUpWithPhoneForm extends React.PureComponent {
  phone = '';
  userName = '';
  _onPhoneChange = (val) => {
    this.phone = val
    Store.dispatch(setPhoneNumber(val))
  }
  _onNameChange = (val) =>{
    this.userName = val
    Store.dispatch(setUserName(val))
  }
  _onSubmit = () => {
    if (!isValidPhoneNumber(this.phone)) {
      showMessage({
        message: 'Provide valid phone number !',
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      });
    }
    else if (this.userName.length == 0)  showMessage({
      message: 'Invalid user name !',
      hideOnPress: true,
      duration: 3000,
      type: 'danger',
    });
    else {
      this.props.onPress()
    }
  }
  render(){
    return(
      <KeyboardAvoidingView
        keyboardVerticalOffset={STATUS_BAR_HEIGHT}
        style={styles.container}
        behavior={'padding'}
        enabled
      >

        <SeperatorLine />

        <View style={styles.inputContainer}>
          <ImageIcon
            style={styles.userIcon}
            source={UserIcon}
          />
          <TextInput
            ref= "nameRef"
            //autoFocus
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
            placeholderTextColor={'#ffffff'}
            selectionColor={'white'}
            autoCapitalize={'none'}
            placeholder={'username'}
            keyboardType={'default'}
            style={styles.userNameText}            
            onChangeText={this._onNameChange}
          />
        </View>

        <SeperatorLine />

        <View style={styles.inputContainer}>
          <ImageIcon
            style={styles.phoneIconStyle}
            source={PhoneIcon}
          />
          <TextInput           
            ref= "phoneRef" 
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
            placeholder={'+20 123 456 7890' }            
            keyboardType={'phone-pad'}
            selectionColor={'white'}
            style={styles.nmberStyle}
            placeholderTextColor={'#ffffff'}
            onChangeText={this._onPhoneChange}
          />
        </View>

        <SeperatorLine />
        
        <LoginButton
          text={'Sign up'}
          style={{
            marginTop: 36
          }}
          onPress={()=>this._onSubmit()}
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