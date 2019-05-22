import React from 'react';
import {Text, View, Button } from 'react-native';
import {styles} from './Styles'
import SignUpWithMailForm from '../../Components/AuthComponents/SignUpWithMailForm'
import {withNavigation} from 'react-navigation'
import {SignUpWithMailAndPassword} from '../../Services/FirebaseServices/SignUpWithMail'
class SignUpWithMail extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>

        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>
            Create Your
            </Text>
          <Text style={styles.loginText}>
            Account
            </Text>
        </View>

        <View style={styles.formContainer}>
          <SignUpWithMailForm onPress={()=>SignUpWithMailAndPassword()}/>
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By clicking Sign up you agree to our
          </Text>
          <Text 
            style={[styles.termsText,{textDecorationLine:'underline'}]}
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
        
      </View>
    );
  }
}

export default withNavigation(SignUpWithMail) 