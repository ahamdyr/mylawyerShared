import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
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
import SideMenuBtn from '../../Components/SideMenu/SideMenuBtn'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import { logOut } from '../../Services/AuthServices'
import { deleteAccount } from '../../Services/FirebaseServices/UserSettings'
import firebase from '../../Services/FirebaseServices/FirebaseApp'
import 'firebase/auth'
import { WhiteX } from '../../Components/Social Components/SocialBtns'

export default class ProfileScreen extends React.Component {

  
  _deleteAccount = async () => {
    await logOut()
    await deleteAccount()      
    showMessage({
      message: 'Your account has been deleted',
      hideOnPress: true,
      duration: 3000,
      type: 'success',
    });
    navigate('Home')
  }
  render() {
    var {
      displayName,
      email,
      phoneNumber,
      photoURL,
      id
    } = this.props.currentUser
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>
            {'Your Profile'}
          </Text>
        </View>
        <View style={styles.greenTop} />
        <Image
          source={
            photoURL ? { uri: photoURL } : defaultPicture
          }
          style={styles.profileImage}
        />
        <SubmitBtn
          style={styles.editBtn}
          text={'Edit Profile'}
          textStyle={styles.editText}
          onPress={() => navigate('EditMyProfile')}
          editBtn={true}
        />

        <View style={styles.inputsContainer} >
          <Text style={styles.labelStyle}>
            {'Full Name'}
          </Text>
          <TextInput
            value={displayName}
            disabled={true}            
            style={styles.name}
          />
          <SeperatorLine style={styles.line} />
          <Text style={styles.labelStyle}>
            {'Username'}
          </Text>
          <TextInput
            value={displayName.split(' ')[0] + id}
            disabled={true}            
            style={styles.name}
          />
          <SeperatorLine style={styles.line} />
          {
            email ?
              <React.Fragment>
                <Text style={styles.labelStyle}>
                  {'Email'}
                </Text>
                <TextInput
                  value={email}
                  disabled={true}
                  style={styles.name}
                />
                <SeperatorLine style={styles.line} />
              </React.Fragment>
              : null
          }
          {
            phoneNumber ?
              <React.Fragment>
                <Text style={styles.labelStyle}>
                  {'Phone'}
                </Text>
                <TextInput
                  value={phoneNumber}
                  disabled={true}
                  style={styles.name}
                />
                <SeperatorLine style={styles.line} />
              </React.Fragment>
              : null
          }
        </View>
        <View style={{ flexDirection: "row", marginTop: 22, justifyContent: "space-around" }} >
          {
            //firebase.auth().currentUser.providerData[0].providerId == 'password' ?
              <SubmitBtn
                style={styles.resetBtn}
                text={'Change Password'}
                textStyle={styles.resetText}
                onPress={() => navigate('ResetPassword')}
              />
              //: null                                                                  
          }          
          <SideMenuBtn
            btnTitle={'Delete Account'}
            style={styles.deleteBtn}
            textStyle={styles.deleteText}
            onPress={() => this._deleteAccount()}
          />
        </View>
        <WhiteX
          style={styles.closeIcon}
          onPress={() => {
            goBack()
          }}
        />
      </SafeAreaView>
    );
  }
}