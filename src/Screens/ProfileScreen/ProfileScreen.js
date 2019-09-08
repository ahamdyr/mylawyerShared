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
import BackIcon from '../../Components/ProfileHeaderIcons/BackIcon'

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
      currentUser
    } = this.props
    var {
      displayName,
      email,
      phoneNumber,
      photoURL,
      id,
      type
    } = currentUser
    return (
      <SafeAreaView style={styles.container} >
        <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
        <View style={styles.headerStyle}>
          {type == 'lawyer' ? <BackIcon onPress={() => goBack()} style={styles.BackIcon} /> : null}
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
          <Text style={styles.name}>
            {displayName}
          </Text>
          <SeperatorLine style={styles.line} />
          <Text style={styles.labelStyle}>
            {'Username'}
          </Text>
          <Text style={styles.name}>
            {displayName.split(' ')[0] + id}
          </Text>
          <SeperatorLine style={styles.line} />
          {
            email ?
              <React.Fragment>
                <Text style={styles.labelStyle}>
                  {'Email'}
                </Text>
                <Text style={styles.name}>
                  {email}
                </Text>
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
                <Text style={styles.name}>
                  {phoneNumber}
                </Text>
                <SeperatorLine style={styles.line} />
              </React.Fragment>
              : null
          }
        </View>
        <View style={{ flexDirection: "row", marginTop: 22, justifyContent: "space-around" }} >
          {
            firebase.auth().currentUser.providerData[0].providerId == 'password' ?
              <SubmitBtn
                style={styles.resetBtn}
                text={'Change Password'}
                textStyle={styles.resetText}
                onPress={() => navigate('ResetPassword')}
              />
              : null                                                                  
          }          
          <SideMenuBtn
            btnTitle={'Deactivate Account'}
            style={styles.deleteBtn}
            textStyle={styles.deleteText}
            onPress={() => this._deleteAccount()}
          />
        </View>
        {
          type == 'user' ?
            <WhiteX
              style={styles.closeIcon}
              onPress={() => {
                goBack()
              }}
            />
            : null
        }
        </View>
      </SafeAreaView>
    );
  }
}