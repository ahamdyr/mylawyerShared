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
import { defaultPicture } from '../../../assets'
import ImageIcon from '../../Components/Common/ImageIcon'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import {
  STATUS_BAR_HEIGHT
} from '../../Components/Constants'
import { editProfileIcon } from '../../../assets'
import { uploadFile, uploadImage } from '../../Services/FilesServices'
import { isValidEmailAddress, isValidPhoneNumber } from '../../Utils/InputValidation'
import { updateUserProfile } from '../../Services/AuthServices'
import {
  updateUserEmail,
  updateUserName,
  updateUserPhoto
} from '../../Services/FirebaseServices/UpdateUser'
import { updateUserPhoneNumber } from '../../Services/AuthServices'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';

export default class EditMyProfile extends React.Component {
  index = 'name'
  handleFocusNext = () => {
    switch (this.index) {
      case 'name':
        this.refs.emailRef.focus()
        this.index = 'email'
        break;
      case 'email':
        this.refs.phoneRef.focus()
        this.index = 'phone'
        break;
      case 'phone':
        this.refs.nameRef.focus()
        this.index = 'name'
        break;
      default:
        this.refs.nameRef.focus()
        break;
    }
  }
  handleFocusPrevious = () => {
    switch (this.index) {
      case 'name':
        this.refs.phoneRef.focus()
        this.index = 'phone'
        break;
      case 'email':
        this.refs.nameRef.focus()
        this.index = 'name'
        break;
      case 'phone':
        this.refs.emailRef.focus()
        this.index = 'email'
        break;
      default:
        this.refs.nameRef.focus()
        break;
    }
  }
  state = {
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: ''
  }
  _edit_Photo = async () => {
    let doc = await uploadFile()
    doc ? this.setState({ photoURL: doc.uri }) : null
  }
  _edit_Name = (val) => {
    this.state.displayName = val
  }
  _edit_Email = (val) => {
    this.state.email = val
  }
  _edit_Phone_Number = (val) => {
    this.state.phoneNumber = val
  }
  _onSubmit = async () => {

    if (this.state.email) {
      if (!isValidEmailAddress(this.state.email)) {        
        showMessage({
          message: 'Badly formatted email !',
          hideOnPress: true,
          duration: 3000,
          type: 'danger',
        });
        return
      }
      await updateUserEmail(this.state.email)
    }
    else {
      this.state.email = this.props.currentUser.email
    }

    if (this.state.displayName) {
      if (this.state.displayName.length == 0) {
        showMessage({
          message: 'You logged in successfully',
          hideOnPress: true,
          duration: 3000,
          type: 'success',
        });
        showMessage({
          message: 'Invalid user name !',
          hideOnPress: true,
          duration: 3000,
          type: 'danger',
        });
        return
      }
      await updateUserName(this.state.displayName)
    }
    else {
      this.state.displayName = this.props.currentUser.displayName
    }

    if (this.state.photoURL) {
      this.state.photoURL = await updateUserPhoto(this.state.photoURL)
    }
    else {
      this.state.photoURL = this.props.userPhoto
    }

    if (this.state.phoneNumber) {
      if (!isValidPhoneNumber(this.state.phoneNumber)) {
        showMessage({
          message: 'Provide valid phone number !',
          hideOnPress: true,
          duration: 3000,
          type: 'danger',
        });
        return
      }
      await updateUserPhoneNumber(this.state.phoneNumber)
      await updateUserProfile(this.state)
      navigate('SideMenu')
    }
    else {
      this.state.phoneNumber = this.props.currentUser.phoneNumber
      await updateUserProfile(this.state)
      navigate('SideMenu')
    }
  }
  render() {
    var {
      userPhoto,
      currentUser
    } = this.props
    var {
      displayName,
      email,
      phoneNumber,
      photoURL
    } = this.state
    return (
      <SafeAreaView style={styles.container} >
        <TouchableOpacity
          onPress={() => goBack()}
          style={styles.headerStyle}
        >
          <Text style={styles.cancel}>
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editContainer}
          onPress={() => Keyboard.dismiss()}
          activeOpacity={1}
        >
          <TouchableOpacity
            style={styles.profileImage}
            onPress={() => this._edit_Photo()}
          >
            <ImageBackground
              source={
                photoURL ? { uri: photoURL } : userPhoto ? { uri: userPhoto } : defaultPicture
              }
              blurRadius={2}
              borderRadius={40}
              style={styles.profileImage}
            >
              <ImageIcon
                style={styles.camera}
                source={editProfileIcon}
              />
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.inputsContainer} >
            <KeyboardAvoidingView
              keyboardVerticalOffset={STATUS_BAR_HEIGHT + 160}
              style={{ 
                alignItems: 'center',
                justifyContent: 'center',
                //backgroundColor: 'red'
              }}
              behavior={'padding'}
              enabled
            >
              <TextInput
                ref= "nameRef"
                autoFocus
                underlineColorAndroid={'transparent'}
                blurOnSubmit={true}
                placeholder={'user name'}
                onChangeText={this._edit_Name}
                style={styles.name}
              />
              <SeperatorLine
                style={styles.line}
              />
              <TextInput
                ref= "emailRef"
                underlineColorAndroid={'transparent'}
                blurOnSubmit={true}
                placeholder={'email'}
                onChangeText={this._edit_Email}
                keyboardType={'email-address'}
                style={styles.inputStyle}
              />
              <SeperatorLine
                style={styles.line}
              />
              <TextInput
                ref= "phoneRef"
                underlineColorAndroid={'transparent'}
                blurOnSubmit={true}
                placeholder={'phone number'}
                keyboardType={'number-pad'}
                onChangeText={this._edit_Phone_Number}
                style={styles.inputStyle}
              />
              <SeperatorLine
                style={styles.line}
              />
            </KeyboardAvoidingView>
          </View>

          <SubmitBtn
            style={styles.saveBtn}
            text={'Save'}
            textStyle={styles.saveText}
            onPress={() => this._onSubmit()}
          />
        </TouchableOpacity>

        {/* <SubmitBtn
          style={styles.saveBtn}
          text={'Save'}
          textStyle={styles.saveText}
          onPress={() => this._onSubmit()}
        /> */}
        <KeyboardAccessoryNavigation
          //avoidKeyboard={true}
          tintColor={'#0b7f7c'}
          nextDisabled={false}
          previousDisabled={false}
          nextHidden={false}
          previousHidden={false}
          onNext={this.handleFocusNext}
          onPrevious={this.handleFocusPrevious}
        />
      </SafeAreaView>
    );
  }
}