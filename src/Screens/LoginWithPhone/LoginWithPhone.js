import React from 'react';
import {Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import {styles} from './Styles'
import LoginWithPhoneForm from '../../Components/AuthComponents/LoginWithPhoneForm'
import {withNavigation} from 'react-navigation'
import { SignIn } from '../../Services/Login Services/PhoneLogin'
class LoginWithPhone extends React.Component {
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
            <LoginWithPhoneForm 
              onPress={(phoneNumber)=>{ SignIn(phoneNumber) }}
            />
          </View>

            {/* footer */}
          <TouchableOpacity 
            style={styles.footer}
            onPress={()=>{navigation.navigate('SignUpWithPhone')}}
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

export default withNavigation(LoginWithPhone) 