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


export default class SideMenu extends React.Component {

  render() {
    var {
      isLoggedUser,
      userPhoto,
      userType
    } = this.props
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ImageIcon
            style={styles.profileImage}
            source={userPhoto ? { uri: userPhoto } : defaultPicture}
          />
          {isLoggedUser ?
            <React.Fragment>
              <SideMenuBtn
                btnTitle={'My Profile'}
                onPress={() => {
                  navigate('EditMyProfile')
                }}
              />
              <SideMenuBtn
                btnTitle={'Settings'}
                onPress={() => {
                  navigate('Settings')
                }}
              />
            </React.Fragment>
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
          <WhiteX
            onPress={() => {
              goBack()
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

