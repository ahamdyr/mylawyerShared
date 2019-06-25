import React from 'react';
import {Text, View, Button, TouchableOpacity, Keyboard } from 'react-native';
import {styles} from './Styles'
import SignUpWithPhoneForm from '../../Components/AuthComponents/SignUpWithPhoneForm'
import {withNavigation} from 'react-navigation'

class SignUpWithPhone extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
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

        <View style={styles.formContainer}>
          <SignUpWithPhoneForm 
            onPress={()=>this.props.navigation.navigate('PhoneVerification',{action: 'signUp'})}/>
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
            onPress={() => navigation.navigate('LoginWithPhone')}
          >
            Already have an Account?
            </Text>
        </View>
        
      </TouchableOpacity>
    );
  }
}
export default withNavigation(SignUpWithPhone)  