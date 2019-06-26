import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from 'react-native';
import { styles } from './Styles'
import {
  navigate,
  goBack
} from '../../Services/NavigationServices'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import {
  STATUS_BAR_HEIGHT
} from '../../Components/Constants'
import { resetPassword } from '../../Services/FirebaseServices/UserSettings'
export default class ResetPassword extends React.Component {
  state = {
    password: ''
  }
  _editPassword = (val) => {
    this.state.password = val
  }
  _onSubmit = async () => {
    if (this.state.password.length < 8) {
      alert('password must be 8 digits or more !')
      return
    }
    await resetPassword(this.state.password)
    goBack()
  }
  render() {

    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={STATUS_BAR_HEIGHT}
        style={styles.container}
        behavior={'padding'}
        enabled
      >
        <TouchableOpacity
          onPress={() => goBack()}
          style={styles.headerStyle}
        >
          <Text style={styles.cancel}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.editContainer}
          onPress={() => Keyboard.dismiss()}
        >
            <SeperatorLine
              style={styles.line}
            />
            <TextInput
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              returnKeyType={'done'}
              secureTextEntry={true}
              placeholder={'new password'}
              onChangeText={this._editPassword}
              style={styles.inputStyle}
            />
            <SeperatorLine
              style={styles.line}
            />
        </TouchableOpacity>

        <SubmitBtn
          style={styles.saveBtn}
          text={'Submit'}
          textStyle={styles.saveText}
          onPress={() => this._onSubmit()}
        />


      </KeyboardAvoidingView>
    );
  }
}