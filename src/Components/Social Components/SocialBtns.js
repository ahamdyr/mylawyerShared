import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import SocialBtn from '../Common/SocialBtn'
import { WIDTH } from '../Constants'
import { withNavigation } from 'react-navigation'
import {
  facebookIcon,
  Mail,
  PhoneIcon,
  twitter,
  linkedIn,
  whiteX,
  google
} from '../../../assets'

import { LoginWithFacebook } from '../../Services/Login Services/FacebookLogin'
import { LoginWithGoogle } from '../../Services/Login Services/GoogleLogin'
export class WhiteX extends React.PureComponent {
  render() {
    return (
      <SocialBtn
        style={[styles.closeStyle, this.props.style]}
        icon={whiteX}
        iconStyle={styles.closeIconStyle}
        onPress={this.props.onPress}
      />
    )
  }
}
class SocialBtns extends React.PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.Btns}>
        <SocialBtn
          style={styles.faceBookStyle}
          icon={facebookIcon}
          iconStyle={styles.faceBookIconStyle}
          onPress={() => LoginWithFacebook()}
        />
        <SocialBtn
          style={styles.googleStyle}
          icon={google}
          iconStyle={styles.googleIconStyle}
          onPress={()=>LoginWithGoogle()}
        />
        {/* <SocialBtn
          style={styles.twitterStyle}
          icon={twitter}
          iconStyle={styles.twitterIconStyle}
        //onPress={()=>loginWithTwitter()}
        />
        <SocialBtn
          style={styles.linkedInStle}
          icon={linkedIn}
          iconStyle={styles.linkedInIconStle}
        //onPress={()=>loginWithlinkedIn()}
        /> */}
        <SocialBtn
          style={styles.mailStyle}
          icon={Mail}
          iconStyle={styles.mailIconStyle}
          onPress={() => navigation.navigate('LoginWithMail')}
        />
        <SocialBtn
          style={styles.phoneStyle}
          icon={PhoneIcon}
          iconStyle={styles.phoneIconStyle}
          onPress={() => navigation.navigate('LoginWithPhone')}
        />

      </View>
    )
  }
}
export default withNavigation(SocialBtns)
const styles = StyleSheet.create({
  Btns: {
    height: 56,
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 28
  },
  faceBookStyle: {
    backgroundColor: 'rgb(61, 90, 150)'
  },
  linkedInStle: {
    backgroundColor: 'rgb(17, 124, 179)'
  },
  twitterStyle: {
    backgroundColor: 'rgb(89, 173, 235)'
  },
  googleStyle:{
    backgroundColor: '#fffafa'
  },
  mailStyle: {
    backgroundColor: 'rgb(11, 127, 124)'
  },
  phoneStyle: {
    backgroundColor: 'rgb(11, 127, 124)'
  },
  closeStyle: {
    backgroundColor: 'rgb(11, 127, 124)'
  },
  faceBookIconStyle: {
    width: 9,
    height: 20
  },
  googleIconStyle: {
    width: 25,
    height: 25
  },
  linkedInIconStle: {
    width: 18,
    height: 18
  },
  twitterIconStyle: {
    width: 21,
    height: 17
  },
  mailIconStyle: {
    width: 23,
    height: 18
  },
  phoneIconStyle: {
    width: 20,
    height: 20
  },
  closeIconStyle: {
    width: 16.5,
    height: 16.5
  }
})