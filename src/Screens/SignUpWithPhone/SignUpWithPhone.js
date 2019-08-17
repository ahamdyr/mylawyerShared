import React from 'react';
import { 
  Text, View, SafeAreaView, TouchableOpacity, BackHandler, Platform, Dimensions
} from 'react-native';
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
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
import { navigate } from '../../Services/NavigationServices'

class SignUpWithPhone extends React.Component {
  componentWillMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigate('UserApp'); // works best when the goBack is async
      return true;
    });
  }
  componentWillUnmount() {
    this.backHandler.remove();
  }
  index = 'name'
  handleFocusNext = () => {
    switch (this.index) {
      case 'name':
        this.refs.formRef.refs.phoneRef.focus()
        this.index = 'phone'
        break;
      case 'phone':
        this.refs.formRef.refs.nameRef.focus()
        this.index = 'name'
        break;
      default:
        break;
    }
  }
  handleFocusPrevious = () => {
    switch (this.index) {
      case 'name':
        this.refs.formRef.refs.phoneRef.focus()
        this.index = 'phone'
        break;
      case 'phone':
        this.refs.formRef.refs.nameRef.focus()
        this.index = 'name'
        break;
      default:
        break;
    }
  }
  render() {
    const { height, width } = Dimensions.get('window')
    const isSafeAreaSupported = Platform.OS === 'ios' && (height > 800 || width > 800)
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
          <View style={{ marginTop: 50 }} />
          <SignUpWithPhoneForm
            ref="formRef"
            onPress={() => this.props.navigation.navigate('PhoneVerification', { action: 'signUp' })}
          />
        </View>
        {/* ==================================================== */}
        <View style={[
          styles.lowerThird,
          isSafeAreaSupported ? { height: 200, marginBottom: 30 } : null
          ]}>
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
              style={[
                styles.footerText,
                Platform.OS == 'android' ? {textDecorationLine: 'underline'} : null
              ]}
            >
              Already have an Account?
            </Text>
            {
              Platform.OS == 'ios' ? 
                <View style={{
                    height: 0.5, width: 180,
                    backgroundColor: '#fefefe', alignSelf: "center"                    
                  }}
                />
                : null
            }
          </TouchableOpacity>
        </View>
        {/* ==================================================== */}
        <KeyboardAccessoryNavigation
          //avoidKeyboard={true}
          inSafeAreaView={true}
          tintColor={'#0b7f7c'}
          nextDisabled={false}
          previousDisabled={false}
          nextHidden={false}
          previousHidden={false}
          onNext={this.handleFocusNext}
          onPrevious={this.handleFocusPrevious}
        />
        {/* </TouchableOpacity> */}
      </SafeAreaView>
    );
  }
}
export default withNavigation(SignUpWithPhone)  