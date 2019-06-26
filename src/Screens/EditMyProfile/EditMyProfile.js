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
import { defaultPicture } from '../../../assets'
import ImageIcon from '../../Components/Common/ImageIcon'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import {
  STATUS_BAR_HEIGHT
} from '../../Components/Constants'
import { editProfileIcon } from '../../../assets'
import { uploadFile, uploadImage } from '../../Services/FilesServices'
import {isValidEmailAddress} from '../../Utils/InputValidation'
import { updateUserProfile } from '../../Services/AuthServices'
import {
  updateUserEmail,
  updateUserName,
  updateUserPhoto
} from '../../Services/FirebaseServices/UpdateUser'
import { updateUserPhoneNumber } from '../../Services/AuthServices'
export default class EditMyProfile extends React.Component {
  state={
    displayName:'',
    email:'',
    phoneNumber:'',
    photoURL:''
  }
  _edit_Photo = async () => {
    let doc = await uploadFile()
    doc ? this.setState({photoURL: doc.uri}) : null
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
  _onSubmit = async() => {

    if(this.state.email){
      if (!isValidEmailAddress(this.state.email)) {
        alert('Badly formatted email !')
        return
      }
      await updateUserEmail(this.state.email)
    }
    else {
      this.state.email = this.props.currentUser.email
    }    

    if (this.state.displayName) {
      if (this.state.displayName.length == 0){
        alert('Invalid user name !')
        return
      }
      await updateUserName(this.state.displayName)
    }
    else{
      this.state.displayName = this.props.currentUser.displayName
    } 

    if (this.state.photoURL) {
      this.state.photoURL = await updateUserPhoto(this.state.photoURL)
    }
    else {
      this.state.photoURL = this.props.userPhoto
    }

    if(this.state.phoneNumber){
      if (this.state.phoneNumber.length < 10) {
        alert('Provide valid phone number !')
        return
      }
      await updateUserPhoneNumber(this.state.phoneNumber)
      await updateUserProfile(this.state)
      //navigate('SideMenu')
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
            style={styles.editContainer}
            onPress={()=>Keyboard.dismiss()}
            activeOpacity={1}
          >
            <TouchableOpacity
              style={styles.profileImage}
              onPress={()=>this._edit_Photo()}
            >
              <ImageBackground
                source={
                  photoURL ? {uri: photoURL} : userPhoto ? { uri: userPhoto } : defaultPicture                  
                }
                style={styles.profileImage}
              >
                <ImageIcon
                  style={styles.camera}
                  source={editProfileIcon}
                />
              </ImageBackground>
            </TouchableOpacity>

            <TextInput
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              returnKeyType={'done'}
              placeholder={currentUser.displayName}
              onChangeText={this._edit_Name}
              style={styles.name}
            />
            <SeperatorLine
              style={styles.line}
            />
            <TextInput
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              returnKeyType={'done'}
              placeholder={currentUser.email || 'email'}
              onChangeText={this._edit_Email}
              keyboardType={'email-address'}
              style={styles.inputStyle}
            />
            <SeperatorLine
              style={styles.line}
            />
            <TextInput
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              returnKeyType={'done'}
              placeholder={currentUser.phoneNumber || '+2 01234567890'}
              keyboardType={'number-pad'}
              onChangeText={this._edit_Phone_Number}
              style={styles.inputStyle}
            />
            <SeperatorLine
              style={styles.line}
            />
          </TouchableOpacity>

          <SubmitBtn
            style={styles.saveBtn}
            text={'Save'}
            textStyle={styles.saveText}
            onPress={() => this._onSubmit()}
          />


        </KeyboardAvoidingView>
    );
  }
}