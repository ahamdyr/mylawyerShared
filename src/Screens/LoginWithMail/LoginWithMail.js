import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './Styles'
import LoginWithMailForm from '../../Components/AuthComponents/LoginWithMailForm'
import { withNavigation } from 'react-navigation'
import { SignIn } from '../../Services/Login Services/MailLogin'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
class LoginWithMail extends React.Component {
  index = 'email'
  handleFocusNext = () => {
    switch (this.index) {
      case 'email':
        this.refs.formRef.refs.passwordRef.focus()
        this.index = 'password'
        break;
      case 'password':
        this.refs.formRef.refs.emailRef.focus()
        this.index = 'email'
        break;
      default:
        break;
    }
  }
  handleFocusPrevious = () => {
    switch (this.index) {
      case 'email':
        this.refs.formRef.refs.passwordRef.focus()
        this.index = 'password'
        break;
      case 'password':
        this.refs.formRef.refs.emailRef.focus()
        this.index = 'email'
        break;
      default:
        break;
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        {/* login word */}
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>
            Login
            </Text>
        </View>

        <View style={{height: 50}} />

        {/* login form */}
        <LoginWithMailForm ref="formRef" onPress={() => SignIn()} />
        
        <View style={{height: 50}} />
        
        {/* footer */}
        <TouchableOpacity
          style={styles.footer}
          onPress={() => { navigation.navigate('SignUpWithMail') }}
        >
          <Text
            style={styles.footerText}
          >
            Don't have an account ?
            </Text>
        </TouchableOpacity>

        <KeyboardAccessoryNavigation
          //avoidKeyboard={true}
          tintColor={'#0b7f7c'}
          accessoryStyle={{
            //height: 30
          }}
          //previousButtonStyle={{width: 40, height: 40}}
          //nextButtonStyle={{width: 40, height: 40}}
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

export default withNavigation(LoginWithMail) 