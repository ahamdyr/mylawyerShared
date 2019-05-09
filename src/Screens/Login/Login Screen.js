import React from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {styles} from './Styles'
import LoginForm from '../../Components/AuthComponents/LoginForm'
export default class LoginScreen extends React.Component {
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
            <LoginForm/>
          </View>

            {/* footer */}
          <View style={styles.footer}>
            <Text 
              style={styles.footerText}
              //onPress={navigation.navigate('SignUp')}
            >
                Don't have an account ?
            </Text>
          </View>
        
      </View>
    );
  }
}

