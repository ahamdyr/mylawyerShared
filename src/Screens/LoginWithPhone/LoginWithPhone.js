import React from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {styles} from './Styles'
import LoginWithPhoneForm from '../../Components/AuthComponents/LoginWithPhoneForm'
import {withNavigation} from 'react-navigation'
import { SignIn } from '../../Services/Login Services/PhoneLogin'
class LoginWithPhone extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
            {/* login word */}
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>
              Login
            </Text>
          </View>
        
            {/* login form */}
          <View style={styles.formContainer}>
            <LoginWithPhoneForm 
              onPress={()=>{ SignIn() }}
            />
          </View>

            {/* footer */}
          <View style={styles.footer}>
            <Text 
              style={styles.footerText}
              onPress={()=>{navigation.navigate('SignUpWithPhone')}}
            >
                Don't have an account ?
            </Text>
          </View>
        
      </View>
    );
  }
}

export default withNavigation(LoginWithPhone) 