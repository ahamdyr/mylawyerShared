import React from 'react';
import { Text, View, TouchableOpacity, BackHandler, SafeAreaView } from 'react-native';
import { styles } from './Styles'
import LoginWithPhoneForm from '../../Components/AuthComponents/LoginWithPhoneForm'
import { withNavigation } from 'react-navigation'
import { SignIn } from '../../Services/Login Services/PhoneLogin'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
import { navigate } from '../../Services/NavigationServices'

class LoginWithPhone extends React.Component {
  componentWillMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigate('UserApp'); // works best when the goBack is async
      return true;
    });
  }
  componentWillUnmount() {
    this.backHandler.remove();
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
        {/* <View style={{ height: 100 }} /> */}
        {/* login form */}
        <View style={styles.formContainer}>
          <LoginWithPhoneForm
            onPress={(phoneNumber) => { SignIn(phoneNumber) }}
          />
        </View>
        {/* <View style={{ height: 100 }} /> */}

        {/* footer */}
        <TouchableOpacity
          style={styles.footer}
          onPress={() => { navigation.navigate('SignUpWithPhone') }}
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
          nextDisabled={true}
          previousDisabled={true}
          nextHidden={true}
          previousHidden={true}
        />

      </SafeAreaView>
    );
  }
}

export default withNavigation(LoginWithPhone) 