import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { MAIN_COLOR, WIDTH, STATUS_BAR_HEIGHT } from '../Constants'
import SeperatorLine from '../Common/SeperatorLine'
import LoginButton from '../Common/LoginButton'
import MailLogo from '../Common/MailIcon'
import ImageIcon from '../Common/ImageIcon'
import LockImage from '../Common/LockImage'
import { PhoneIcon, UserIcon } from '../../../assets'
import Store from '../../Redux/Store'
import {
  setMail,
  setPassword,
  setUserName,
  setPhoneNumber
} from '../../Redux/Auth/actions'
import { isValidEmailAddress } from '../../Utils/InputValidation'


export default class SignUpWithMailForm extends React.PureComponent {
  mail = '';
  phone = '';
  password = '';
  userName = '';
  _onPhoneChange = (val) => {
    this.phone = val
    Store.dispatch(setPhoneNumber(val))
  }
  _onMailChange = (val) => {
    this.mail = val
    Store.dispatch(setMail(val))
  }
  _onPassChange = (val) => {
    this.password = val
    Store.dispatch(setPassword(val))
  }
  _onNameChange = (val) => {
    this.userName = val
    Store.dispatch(setUserName(val))
  }
  _submit = () => {
    if (!isValidEmailAddress(this.mail)) {
      showMessage({
        message: 'Badly formatted email !',
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      });
    }
    else if (this.password.length < 8) {
      showMessage({
        message: 'Password must be 8 digits or more !',
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      });
    }
    else if (this.userName.length == 0) showMessage({
      message: 'Invalid user name !',
      hideOnPress: true,
      duration: 3000,
      type: 'danger',
    });
    else {
      this.props.onPress()
    }
  }
  render() {
    return (
      <KeyboardAvoidingView
        //keyboardVerticalOffset={STATUS_BAR_HEIGHT}
        //contentContainerStyle={styles.container}
        style={styles.container}
        // behavior={'position'}
      >
        <View style={{ marginTop: 20 }} />
        <SeperatorLine />

        <View style={styles.inputContainer}>
          <ImageIcon
            style={styles.userIcon}
            source={UserIcon}
          />
          <TextInput
            ref="nameRef"
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
          <MailLogo />
          <TextInput
            ref="emailRef"
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
            autoCapitalize={'none'}
            placeholder={'name@mail.com'}
            selectionColor={'white'}
            keyboardType={'email-address'}
            style={styles.inputStyle}
            placeholderTextColor={'#ffffff'}
            onChangeText={this._onMailChange}
          />
        </View>

        <SeperatorLine />
        <View style={styles.inputContainer}>
          <ImageIcon
            style={styles.phoneIconStyle}
            source={PhoneIcon}
          />
          <TextInput
            ref="phoneRef"
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
            placeholder={'+20 123 456 7890'}
            keyboardType={'phone-pad'}
            selectionColor={'white'}
            style={styles.nmberStyle}
            placeholderTextColor={'#ffffff'}
            onChangeText={this._onPhoneChange}
          />
        </View>

        <SeperatorLine />

        <View style={styles.inputContainer}>
          <LockImage />
          <TextInput
            ref="passwordRef"
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
            autoCapitalize={'none'}
            secureTextEntry
            placeholder={'***********'}
            selectionColor={'white'}
            placeholderTextColor={'#ffffff'}
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

        <SeperatorLine />

        <LoginButton
          text={'Sign up'}
          style={{
            marginTop: 25
          }}
          onPress={() => this._submit()}
        />

      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    //marginBottom: 157.5,
    //marginTop: 40,
    //backgroundColor: 'red',
  },
  inputContainer: {
    width: 250,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    fontFamily: 'Lato-Light',
    fontSize: 16,
    marginLeft: 16,
    color: 'white',
    width: 200,
  },
  forgot: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    right: 0
  },
  userIcon: {
    width: 11,
    height: 16,
    marginLeft: 12
  },
  userNameText: {
    fontFamily: 'Lato-Light',
    fontSize: 16,
    marginLeft: 21,
    color: 'white',
    width: 200,
  },
  phoneIconStyle: {
    height: 16,
    width: 16,
    marginLeft: 11.5
  },
  nmberStyle: {
    fontFamily: 'Lato-Light',
    fontSize: 16,
    marginLeft: 18.5,
    color: 'white',
    width: 200,
  }
})