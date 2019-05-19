import React from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {styles} from './Styles'
import LoginWithMailForm from '../../Components/AuthComponents/LoginWithMailForm'
import {withNavigation} from 'react-navigation'

class LoginWithMail extends React.Component {
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
            <LoginWithMailForm/>
          </View>

            {/* footer */}
          <View style={styles.footer}>
            <Text 
              style={styles.footerText}
              onPress={()=>{navigation.navigate('SignUpWithMail')}}
            >
                Don't have an account ?
            </Text>
          </View>
        
      </View>
    );
  }
}

export default withNavigation(LoginWithMail) 