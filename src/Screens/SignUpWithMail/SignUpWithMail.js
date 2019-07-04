import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './Styles'
import SignUpWithMailForm from '../../Components/AuthComponents/SignUpWithMailForm'
import { withNavigation } from 'react-navigation'
import { SignUp } from '../../Services/Login Services/MailLogin'

class SignUpWithMail extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.editContainer}
          onPress={() => Keyboard.dismiss()}
        >

        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>
            Create Your
            </Text>
          <Text style={styles.loginText}>
            Account
            </Text>
        </View>

        <SignUpWithMailForm onPress={() => SignUp()} />

        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By clicking Sign up you agree to our
          </Text>
          <Text
            style={[styles.termsText, { textDecorationLine: 'underline' }]}
          //onPress={() => navigation.navigate('Terms')}
          >
            Terms of Service
          </Text>
        </View>

        <View style={styles.footer}>
          <Text
            style={styles.footerText}
            onPress={() => navigation.navigate('LoginWithMail')}
          >
            Already have an Account?
            </Text>
        </View>

      </SafeAreaView>
    );
  }
}

export default withNavigation(SignUpWithMail) 