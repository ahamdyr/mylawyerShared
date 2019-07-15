import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  SafeAreaView,
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
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';

export default class ResetPassword extends React.Component {
  index = 'old'
  handleFocusNext = () => {
    switch (this.index) {
      case 'old':
        this.refs.new.focus()
        this.index = 'new'
        break;
      case 'new':
        this.refs.old.focus()
        this.index = 'old'
        break;
      default:
        break;
    }
  }
  state = {
    password: '',
    oldPassword: ''
  }
  _editPassword = (val) => {
    this.state.password = val
  }
  _editOldPassword = (val) => {
    this.state.oldPassword = val
  }
  _onSubmit = async () => {
    if (this.state.password.length < 8) {
      showMessage({
        message: 'password must be 8 digits or more !',
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      });
      return
    }
    await resetPassword(this.state.password, this.state.oldPassword)
    goBack()
  }
  render() {

    return (
      <SafeAreaView
        style={styles.container}
      >
        <TouchableOpacity
          onPress={() => goBack()}
          style={styles.headerStyle}
        >
          <Text style={styles.cancel}>
            Cancel
          </Text>
        </TouchableOpacity>

        <View style={styles.fakePadding}/>
        {/* ///////////////////////////////////////////////////////////// */}
        <KeyboardAvoidingView
          //keyboardVerticalOffset={STATUS_BAR_HEIGHT + 100}
          style={styles.viewContainer}
          behavior={'padding'}
          enabled
        >
          <SeperatorLine
            style={styles.line}
          />
          <TextInput
            ref="old"
            autoFocus
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
            secureTextEntry={true}
            placeholder={'Old password'}
            onChangeText={this._editOldPassword}
            style={styles.inputStyle}
          />
          <SeperatorLine
            style={styles.line}
          />
          <TextInput
            ref="new"
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
            secureTextEntry={true}
            placeholder={'New password'}
            onChangeText={this._editPassword}
            style={styles.inputStyle}
          />
          <SeperatorLine
            style={styles.line}
          />
        </KeyboardAvoidingView>
        {/* ///////////////////////////////////////////////////////////// */}
        <View style={styles.fakePadding}/>

        <SubmitBtn
          style={styles.saveBtn}
          text={'Submit'}
          textStyle={styles.saveText}
          onPress={() => this._onSubmit()}
        />
        {/* ///////////////////////////////////////////////////////////// */}
        <KeyboardAccessoryNavigation
          //avoidKeyboard={true}
          tintColor={'#0b7f7c'}
          accessoryStyle={{
            //height: 30
          }}
          //previousButtonStyle={{width: 40, height: 40}}
          //nextButtonStyle={{width: 40, height: 40}}
          nextDisabled={false}
          previousDisabled={false}
          nextHidden={false}
          previousHidden={false}
          onNext={this.handleFocusNext}
          onPrevious={this.handleFocusNext}
        />
      </SafeAreaView>
    );
  }
}