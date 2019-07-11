import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './Styles'
import SignUpWithPhoneForm from '../../Components/AuthComponents/SignUpWithPhoneForm'
import { withNavigation } from 'react-navigation'
import SocialBtn from '../../Components/Common/SocialBtn'
import {
  facebookIcon,
  google
} from '../../../assets'

import { LoginWithFacebook } from '../../Services/Login Services/FacebookLogin'
import { LoginWithGoogle } from '../../Services/Login Services/GoogleLogin'

class SignUpWithPhone extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        {/* <TouchableOpacity
          activeOpacity={1}
          style={styles.container}
          onPress={() => Keyboard.dismiss()}
        > */}
        {/* ==================================================== */}
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>
            Create Your
            </Text>
          <Text style={styles.loginText}>
            Account
            </Text>
        </View>
        {/* ==================================================== */}
        <View style={styles.formContainer}>
          <SignUpWithPhoneForm
            onPress={() => this.props.navigation.navigate('PhoneVerification', { action: 'signUp' })} />
        </View>
        {/* ==================================================== */}
        <View style={styles.Btns}>
          <SocialBtn
            style={styles.faceBookStyle}
            icon={facebookIcon}
            iconStyle={styles.faceBookIconStyle}
            onPress={() => LoginWithFacebook()}
          />
          <View style={{ width: 30 }} />
          <SocialBtn
            style={styles.googleStyle}
            icon={google}
            iconStyle={styles.googleIconStyle}
            onPress={() => LoginWithGoogle()}
          />
        </View>
        {/* ==================================================== */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By clicking Sign up you agree to our
            </Text>
          <Text
            style={[styles.termsText, { textDecorationLine: 'underline' }]}
            onPress={() => navigation.navigate('TermsAndConditions')}
          >
            Terms of Service
            </Text>
        </View>
        {/* ==================================================== */}
        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.navigate('LoginWithPhone')}
        >
          <Text
            style={styles.footerText}
          >
            Already have an Account?
            </Text>
        </TouchableOpacity>
        {/* ==================================================== */}
        {/* </TouchableOpacity> */}
      </SafeAreaView>
    );
  }
}
export default withNavigation(SignUpWithPhone)  