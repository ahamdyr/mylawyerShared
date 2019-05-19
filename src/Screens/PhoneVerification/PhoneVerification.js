
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  Alert
} from 'react-native';

import 'firebase/auth'
import {MAIN_COLOR, WIDTH} from '../../Components/Constants'

import { sendVerificationCode } from "../../Services/PhoneVerify";

export default class PhoneVerification extends Component {

  confirmationResult = null;
  confCode = "";
  constructor(props) {
    super(props);
    this._onSubmitVerfCode = this._onSubmitVerfCode.bind(this)
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
  _tryAgain = async () => {
    this.confirmationResult = await sendVerificationCode(this.props.phoneNumber)
  }
  async componentDidMount() {
    this.confirmationResult = await sendVerificationCode(this.props.phoneNumber)

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

    this.confirmationResult.confirm(this.confCode).then((credential) => {
      // navigate to spinner 
      //Authrize  with backend with credential
      // navigate to app
      this.props.navigation.navigate('App')
    }).catch(function (error) {
      // User couldn't sign in (bad verification code?)
      // ...
      // We can alert message here
      Alert.alert("error", "Try again!")
    })
  }



  render() {
    let headerText = `What's your verification code?`
    let buttonText = 'Verify confirmation code';
    let hintText = 'Enter 6-digit code'
    let textStyle = {

      textAlign: 'center',
      fontSize: 40,
      height: 50,
      fontWeight: 'bold',
      //   fontFamily: 'Courier'
    };

    return (

      <View style={styles.container}>

        <Text style={styles.header}>{headerText}</Text>

        
          <View style={{ flexDirection: 'row' }}>





            <TextInput
              ref={'textInput'}
              name={'code'}
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={'_ _ _ _ _ _'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={[styles.textInput]}
              returnKeyType='go'
              autoFocus
              placeholderTextColor={'black'}
              selectionColor={'black'}
              onChangeText={this._onChangeCodeText}
              maxLength={6} />

          </View>
          <Text style={styles.hint}>
            {hintText}
          </Text>


          <TouchableOpacity
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

        

        

      </View>

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
    textAlign: 'center',
    padding: 0,
    margin: 0,
    flex: 1,
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