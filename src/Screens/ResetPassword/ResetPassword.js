import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { styles } from './Styles'
import { defaultPicture } from '../../../assets'
import { navigate, goBack } from '../../Services/NavigationServices'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import { HEIGHT } from '../../Components/Constants'
import { resetPassword } from '../../Services/FirebaseServices/UserSettings'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
import SaveIcon from '../../Components/ProfileHeaderIcons/SaveIcon'
import BackIcon from '../../Components/ProfileHeaderIcons/BackIcon'

export default class ResetPassword extends React.Component {



  index = 'oldPassword'
  handleFocusNext = () => {
    switch (this.index) {
      case 'oldPassword':
        this.refs.newPassword.focus()
        this.index = 'newPassword'
        break;
      case 'newPassword':
        this.refs.confirmNewPassword.focus()
        this.index = 'confirmNewPassword'
        break;
      case 'confirmNewPassword':
        this.refs.oldPassword.focus()
        this.index = 'oldPassword'
        break;
      default:
        break;
    }
  }
  state = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  }
  _editNewPassword = (val) => {
    this.state.newPassword = val
  }
  _editConfirmNewPassword = (val) => {
    this.state.confirmNewPassword = val
  }
  _editOldPassword = (val) => {
    this.state.oldPassword = val
  }
  _onSubmit = async () => {
    if (this.state.newPassword.length < 8) {
      showMessage({
        message: 'password must be 8 digits or more !',
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      });
      return
    }
    if (this.state.newPassword !== this.state.confirmNewPassword) {
      showMessage({
        message: 'Your password and confirmation password do not match !',
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      });
      return
    }
    await resetPassword(this.state.newPassword, this.state.oldPassword)
    showMessage({
      message: 'Password Changed!',
      hideOnPress: true,
      duration: 3000,
      type: 'success',
    });
    goBack()
  }
  render() {

    var {
      userPhoto
    } = this.props

    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.headerStyle}>
          <BackIcon onPress={() => goBack()} />
          <Text style={styles.headerTextStyle}>
            {'Change Password'}
          </Text>
          <SaveIcon onPress={() => this._onSubmit()} />
        </View>

        <View style={styles.greenTop} />

        <Image
          source={
            userPhoto ? { uri: userPhoto } : defaultPicture
          }
          style={styles.profileImage}
        />
        {/* ///////////////////////////////////////////////////////////// */}
        <TouchableOpacity
          style={{
            flex: 1,
            //justifyContent: 'center',
          }}
          onPress={() => Keyboard.dismiss()}
          activeOpacity={1}
        >
        <ScrollView style={{ marginHorizontal: 32 }}>
          {/* <KeyboardAvoidingView
            keyboardVerticalOffset={(HEIGHT / 4) + 223}
            style={{ marginHorizontal: 32 }}
            behavior={'padding'}
            enabled
          > */}
            <Text style={styles.labelStyle}>
              {'OLD PASSWORD'}
            </Text>
            <TextInput
              ref="oldPassword"
              //autoFocus
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              secureTextEntry={true}
              placeholder={'Old password'}
              onChangeText={this._editOldPassword}
              style={styles.inputStyle}
            />
            <SeperatorLine style={styles.line} />
            {/* ///////////////////////////////////////////////////////////// */}
            <Text style={styles.labelStyle}>
              {'NEW PASSWORD'}
            </Text>
            <TextInput
              ref="newPassword"
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              secureTextEntry={true}
              placeholder={'New password'}
              onChangeText={this._editNewPassword}
              style={styles.inputStyle}
            />
            <SeperatorLine style={styles.line} />
            {/* ///////////////////////////////////////////////////////////// */}
            <Text style={styles.labelStyle}>
              {'CONFIRM NEW PASSWORD'}
            </Text>
            <TextInput
              ref="confirmNewPassword"
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              secureTextEntry={true}
              placeholder={'Confirm New password'}
              onChangeText={this._editConfirmNewPassword}
              style={styles.inputStyle}
            />
            <SeperatorLine style={styles.line} />

          {/* </KeyboardAvoidingView> */}
        </ScrollView>
        </TouchableOpacity>
        {/* ///////////////////////////////////////////////////////////// */}
        {/* <View style={styles.fakePadding}/> */}
        <KeyboardAccessoryNavigation
          avoidKeyboard={true}
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