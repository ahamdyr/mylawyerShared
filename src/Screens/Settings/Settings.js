import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import SideMenuBtn from '../../Components/SideMenu/SideMenuBtn'
import ImageIcon from '../../Components/Common/ImageIcon'
import { WhiteX } from '../../Components/Social Components/SocialBtns'
import { styles } from './Styles'
import {
  navigate,
  goBack
} from '../../Services/NavigationServices'
import { defaultPicture } from '../../../assets'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import { logOut } from '../../Services/AuthServices'
import { deleteAccount } from '../../Services/FirebaseServices/UserSettings'

export default class Settings extends React.Component {
  _logOut = async () => {
    await logOut()
    goBack()
  }
  _deleteAccount = async () => {
    await logOut()
    await deleteAccount()
    alert('Your account has been deleted')
    goBack()
  }
  render() {
    var {
      isLoggedUser,
      userPhoto
    } = this.props
    return (
      <SafeAreaView style={styles.container}>

        <Text
          style={styles.title}
        >
          Settings
        </Text>

        <View 
          style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SeperatorLine
            style={styles.line}
          />
          <SideMenuBtn
            btnTitle={'Reset Password'}
            style={styles.btn}
            onPress={()=>navigate('ResetPassword')}
          />
          <SeperatorLine
            style={styles.line}
          />
          <SideMenuBtn
            btnTitle={'Log out'}
            style={styles.btn}
            onPress={()=>this._logOut()}
          />
          <SeperatorLine
            style={styles.line}
          />
          <SideMenuBtn
            btnTitle={'Delete Account'}
            style={styles.btn}
            textStyle={styles.textStyle}
            onPress={()=>this._deleteAccount()}
          />
          <SeperatorLine
            style={styles.line}
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

