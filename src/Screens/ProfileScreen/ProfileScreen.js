import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert
} from 'react-native'
import { styles } from './Styles'
import { navigate, goBack } from '../../Services/NavigationServices'
import { defaultPicture } from '../../../assets'
import SideMenuBtn from '../../Components/SideMenu/SideMenuBtn'
import SwitchBtn from '../../Components/Common/SwitchBtn'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import { logOut } from '../../Services/AuthServices'
import { deleteAccount } from '../../Services/FirebaseServices/UserSettings'
import { deactivateAccount } from '../../Services/BackendServices/AccountServices'
import firebase from '../../Services/FirebaseServices/FirebaseApp'
import 'firebase/auth'
import { WhiteX } from '../../Components/Social Components/SocialBtns'
import BackIcon from '../../Components/ProfileHeaderIcons/BackIcon'

export default class ProfileScreen extends React.Component {
  _deleteAccount = async () => {
    await logOut()
    await deleteAccount()
    await deactivateAccount(this.props.currentUser.accessToken)
    showMessage({
      message: 'Your account has been deactivated',
      hideOnPress: true,
      duration: 3000,
      type: 'success'
    })
    navigate('Home')
  }
  _onSwitchPress = () => {
    Alert.alert(
      'Switch account',
      `Any questions you asked as a user will be deleted once you switch to a lawyer.`,
      [        
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this._switchAccount(), style: 'default' },
      ],
      { cancelable: true }
    )
  }
  _switchAccount = async () => {
    navigate('LawyerAuth')
  }
  render() {
    var { currentUser } = this.props
    var { displayName, email, phoneNumber, photoURL, id, type } = currentUser
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
          <View style={styles.headerStyle}>
            {type == 'lawyer' ? (
              <BackIcon onPress={() => goBack()} style={styles.BackIcon} />
            ) : null}
            <Text style={styles.headerTextStyle}>{'Your Profile'}</Text>
          </View>
          <View style={styles.greenTop} />
          <Image
            source={photoURL ? { uri: photoURL } : defaultPicture}
            style={styles.profileImage}
          />
          <View
            style={{
              flex: 1,
              marginTop: 5,
              marginBottom: 100,
              justifyContent:
                type == 'lawyer' ? 'space-around' : 'space-between'
            }}
          >
            <SubmitBtn
              style={styles.editBtn}
              text={'Edit Profile'}
              textStyle={styles.editText}
              onPress={() => navigate('EditMyProfile')}
              editBtn={true}
            />
            <View style={styles.inputsContainer}>              
              {displayName && (
                <React.Fragment>
                  <Text style={[styles.labelStyle, { marginTop: 0 }]}>
                    {'Full Name'}
                  </Text>
                  <Text style={styles.name}>{displayName}</Text>
                  <SeperatorLine style={styles.line} />
                  <Text style={styles.labelStyle}>{'Username'}</Text>
                  <Text style={styles.name}>
                    {displayName.split(' ')[0] + id}
                  </Text>
                  <SeperatorLine style={styles.line} />
                </React.Fragment>
              )}
              {email && (
                <React.Fragment>
                  <Text style={styles.labelStyle}>{'Email'}</Text>
                  <Text style={styles.name}>{email}</Text>
                  <SeperatorLine style={styles.line} />
                </React.Fragment>
              )}
              {phoneNumber && (
                <React.Fragment>
                  <Text style={styles.labelStyle}>{'Phone'}</Text>
                  <Text style={styles.name}>{phoneNumber}</Text>
                  <SeperatorLine style={styles.line} />
                </React.Fragment>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                //marginTop: 22,
                justifyContent: 'space-around'
              }}
            >
              {firebase.auth().currentUser.providerData[0].providerId ==
              'password' && (
                <SubmitBtn
                  style={styles.resetBtn}
                  text={'Change Password'}
                  textStyle={styles.resetText}
                  onPress={() => navigate('ResetPassword')}
                />
              )}
              <SideMenuBtn
                btnTitle={'Deactivate Account'}
                style={styles.deleteBtn}
                textStyle={styles.deleteText}
                onPress={() => this._deleteAccount()}
              />
            </View>
            {type == 'user' && (
              <SwitchBtn onPress={() => this._onSwitchPress()} />
            )}
          </View>
          {type == 'user' && (
            <WhiteX
              style={styles.closeIcon}
              onPress={() => {
                goBack()
              }}
            />
          )}
        </View>
      </SafeAreaView>
    )
  }
}
