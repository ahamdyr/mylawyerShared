import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Alert
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
import { HEIGHT } from '../../Components/Constants'
import { editProfileIcon, smallX } from '../../../assets'
import { uploadFile, uploadGalleryImage } from '../../Services/FilesServices'
import { isValidEmailAddress, isValidPhoneNumber } from '../../Utils/InputValidation'
import { updateUserProfile } from '../../Services/AuthServices'
import {
  updateUserEmail,
  updateUserName,
  updateUserPhoto
} from '../../Services/FirebaseServices/UpdateUser'
import { updateUserPhoneNumber } from '../../Services/AuthServices'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
import SaveIcon from '../../Components/ProfileHeaderIcons/SaveIcon'
import BackIcon from '../../Components/ProfileHeaderIcons/BackIcon'

export default class EditMyProfile extends React.Component {

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: 'Edit Profile',
  //     //headerRight: <SaveIcon onPress={() => this._onSubmit()} />
  //   }
  // }

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
  _edit_Photo = () => {
    Alert.alert('Select type', '', [
      { text: 'Image', onPress: () => this._uploadGalleryImage(), style: 'default' },
      { text: 'File', onPress: () => this._uploadFile(), style: 'default' },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ], { cancelable: true })
  }
  _uploadGalleryImage = async () => {
    let doc = await uploadGalleryImage()
    doc ? this.setState({ photoURL: doc.uri }) : null
  }
  _uploadFile = async () => {
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
      updateUserEmail(this.state.email)
    }

    if (this.state.displayName) {
      if (this.state.displayName.length == 0) {
        showMessage({
          message: 'Invalid user name !',
          hideOnPress: true,
          duration: 3000,
          type: 'danger',
        });
        return
      }
      updateUserName(this.state.displayName)
    }

    if (this.state.photoURL) {
      this.state.photoURL = await updateUserPhoto(this.state.photoURL)
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
    }
        
    updateUserProfile(this.state)
    showMessage({
      message: 'Profile updated!',
      hideOnPress: true,
      duration: 3000,
      type: 'success',
    });
    //goBack()
    navigate('ProfileScreen', {data: 'data'})
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
    var keyboardVerticalOffset = (HEIGHT / 4) + 113
    return (
      <SafeAreaView style={styles.container} >

        <View style={styles.headerStyle}>
          <BackIcon onPress={() => goBack()} />
          <Text style={styles.headerTextStyle}>
            {'Edit Profile'}
          </Text>
          <SaveIcon onPress={() => this._onSubmit()} />
        </View>

        <View style={styles.greenTop} />
        {
          // photoURL ?
          //   <TouchableOpacity
          //     activeOpacity={1}
          //     style={styles.profileImageBtn}
          //     onPress={() => this.setState({ photoURL: '' })}
          //   >
          //     <ImageBackground
          //       source={
          //         photoURL ? { uri: photoURL } : userPhoto ? { uri: userPhoto } : defaultPicture
          //       }
          //       borderRadius={60}
          //       style={styles.profileImage}
          //     >
          //       <ImageIcon
          //         style={{ width: 30, height: 30, position: 'absolute', top: 0, left: 0 }}
          //         source={smallX}
          //       />
          //     </ImageBackground>
          //   </TouchableOpacity> :
            <TouchableOpacity
              activeOpacity={1}
              style={styles.profileImageBtn}
              onPress={() => this._uploadGalleryImage()}
            >
              <ImageBackground
                source={
                  photoURL ? { uri: photoURL } : userPhoto ? { uri: userPhoto } : defaultPicture
                }
                borderRadius={60}
                style={styles.profileImage}
              >
                <ImageIcon
                  style={styles.camera}
                  source={editProfileIcon}
                />
              </ImageBackground>
            </TouchableOpacity>
        }       

        <TouchableOpacity
          style={{
            flex: 1,
            //justifyContent: 'flex-start',
          }}
          onPress={() => Keyboard.dismiss()}
          activeOpacity={1}
        >
          <ScrollView style={{ marginHorizontal: 32 }}>
          {/* <KeyboardAvoidingView
            style={{ marginHorizontal: 32 }}
            keyboardVerticalOffset={keyboardVerticalOffset}
            behavior={'padding'}
            enabled
          > */}
            <Text style={styles.labelStyle}>
              {'Full Name'}
            </Text>
            <TextInput
              ref="nameRef"
              //autoFocus
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              placeholder={currentUser.displayName}
              placeholderTextColor={"#0d0d0d"}
              onChangeText={this._edit_Name}
              style={styles.name}
            />
            <SeperatorLine
              style={styles.line}
            />
            <Text style={styles.labelStyle}>
              {'Email'}
            </Text>
            <TextInput
              ref="emailRef"
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              placeholder={currentUser.email || ''}
              placeholderTextColor={"#0d0d0d"}
              onChangeText={this._edit_Email}
              keyboardType={'email-address'}
              style={styles.name}
            />
            <SeperatorLine
              style={styles.line}
            />
            <Text style={styles.labelStyle}>
              {'Phone'}
            </Text>
            <TextInput
              ref="phoneRef"
              underlineColorAndroid={'transparent'}
              blurOnSubmit={true}
              placeholder={currentUser.phoneNumber || ''}
              placeholderTextColor={"#0d0d0d"}
              keyboardType={'phone-pad'}
              onChangeText={this._edit_Phone_Number}
              style={styles.name}
            />
            <SeperatorLine
              style={styles.line}
            />
          {/* </KeyboardAvoidingView> */}
          </ScrollView>
        </TouchableOpacity>

        <KeyboardAccessoryNavigation
          avoidKeyboard={true}
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