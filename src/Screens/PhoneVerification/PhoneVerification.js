import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  BackHandler,
  Alert
} from 'react-native';

import { MAIN_COLOR, WIDTH } from '../../Components/Constants'

import { 
  requestCode,
  SignInWithPhone,
  SignUpWithPhone,
  Update
} from '../../Services/Login Services/PhoneLogin'
import { navigate } from '../../Services/NavigationServices'

export default class PhoneVerification extends Component {

  componentWillMount(){
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigate('UserApp'); // works best when the goBack is async
      return true;
    });
  }
  componentWillUnmount() {
    this.backHandler.remove();
  }
  
  confCode = "";
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      confCode: false
    };
  }
  _renderFooter = () => {
    return (
      <TouchableOpacity onPress={this._tryAgain}>
        <Text style={styles.wrongNumberText}>
          Send again ?
          </Text>
      </TouchableOpacity>
    );
  }
  _tryAgain = () => {
    requestCode(this.props.phoneNumber, this.props.countryCode)
  }
  componentDidMount() {
    requestCode(this.props.phoneNumber, this.props.countryCode)
  }
  _onChangeCodeText = (val) => {
    this.confCode = val;
    if (this.confCode.length == 6) {
      this.setState({ confCode: true })
    }
    else {
      this.setState({ confCode: false })
    }
  }
  _onSubmitVerfCode = () => {    
    let phone = `${this.props.countryCode}${this.props.phoneNumber}`
    let action = this.props.navigation.state.params.action
    if(action == 'login') SignInWithPhone(phone, this.confCode)
    else if (action == 'signUp') SignUpWithPhone(phone, this.confCode, this.props.userName)
    else if (action == 'update') Update(this.confCode) 
  }



  render() {
    let headerText = `What's your verification code?`
    let buttonText = 'Verify confirmation code';
    let hintText = 'Enter 6-digit code'

    return (
      <SafeAreaView style={styles.container}>

        <Text style={styles.header}>{headerText}</Text>
        <TextInput
          ref={'textInput'}
          blurOnSubmit={true}
          name={'code'}
          type={'TextInput'}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder={'_ _ _ _ _ _'}
          keyboardType={'phone-pad'}
          style={[styles.textInput]}
          //autoFocus
          placeholderTextColor={'black'}
          selectionColor={'black'}
          onChangeText={this._onChangeCodeText}
          maxLength={6}
        />
        <Text style={styles.hint}>
          {hintText}
        </Text>
        <TouchableOpacity
          activeOpacity={
            this.state.confCode ? 0.2 : 1
          }
          style={[styles.button, {
            backgroundColor: this.state.confCode ? MAIN_COLOR : '#abaaaa'
          }]}
          onPress={this.state.confCode ? this._onSubmitVerfCode : () => { }}
        >
          <Text style={styles.buttonText}>
            {this.state.confCode ? buttonText : 'Enter code'}
          </Text>
        </TouchableOpacity>
        {this._renderFooter()}

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 20,
    //margin: 20,
    color: '#4A4A4A',
  },
  form: {
    marginTop: 60
  },
  textInput: {    
    fontSize: 40,
    color: 'black',
    height: 50,
  },
  hint: {
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    marginTop: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    width: 240
  },
  buttonText: {
    color: '#fff',
    // fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold'
  },
  wrongNumberText: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center',
    color: MAIN_COLOR
  }
});