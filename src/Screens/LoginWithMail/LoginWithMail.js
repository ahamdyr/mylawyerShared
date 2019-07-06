import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {styles} from './Styles'
import LoginWithMailForm from '../../Components/AuthComponents/LoginWithMailForm'
import {withNavigation} from 'react-navigation'
import { SignIn } from '../../Services/Login Services/MailLogin'
class LoginWithMail extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <SafeAreaView style={styles.container}>
            {/* login word */}
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>
              Login
            </Text>
          </View>
        
            {/* login form */}
          <View style={styles.formContainer}>
            <LoginWithMailForm onPress={()=>SignIn()} />
          </View>

            {/* footer */}
          <TouchableOpacity 
            style={styles.footer}
            onPress={()=>{navigation.navigate('SignUpWithMail')}}          
          >
            <Text 
              style={styles.footerText}
            >
                Don't have an account ?
            </Text>
          </TouchableOpacity>
        
      </SafeAreaView>
    );
  }
}

export default withNavigation(LoginWithMail) 