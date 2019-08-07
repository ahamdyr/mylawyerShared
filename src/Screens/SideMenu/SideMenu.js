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
import { logOut } from '../../Services/AuthServices'


export default class SideMenu extends React.Component {
  _logOut = async () => {
    await logOut()
    navigate('Home')
  }
  render() {
    var {
      isLoggedUser,
      userPhoto,
      userType
    } = this.props
    var isUser = userType == 'user'
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[
            styles.container,
            isUser || !isLoggedUser ? {marginBottom: 30} : {marginBottom: 120}
          ]}
        >
          <ImageIcon
            style={styles.profileImage}
            source={userPhoto ? { uri: userPhoto } : defaultPicture}
          />
          {isLoggedUser ?
            <SideMenuBtn
              btnTitle={'My Profile'}
              onPress={() => {
                navigate('ProfileStack')
              }}
            />
            : <SideMenuBtn
              btnTitle={'Login'}
              onPress={() => {
                navigate('UserTypeScreen')
              }}
            />
          }
          <SideMenuBtn
            btnTitle={'Contact us'}
            onPress={() => navigate('ContactUs')}
          />
          <SideMenuBtn
            btnTitle={'Terms and Conditions'}
            onPress={() => {
              navigate('TermsAndConditions')
            }}
          />
          <SideMenuBtn
            btnTitle={'About My lawyer'}
            onPress={() => {
              navigate('About')
            }}
          />
          {
            isLoggedUser && 
            <SideMenuBtn
              btnTitle={'Log out'}
              onPress={()=>this._logOut()}
            />
          }
          {
            isUser || !isLoggedUser ?
              <WhiteX
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

