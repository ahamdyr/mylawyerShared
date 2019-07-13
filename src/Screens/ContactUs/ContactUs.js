import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { styles } from './Styles'
import BlackX from '../../Components/Common/BlackX'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import {
  goBack, navigate
} from '../../Services/NavigationServices'
import QuestionComponent from '../../Components/QuestionComponents/Question'
import { isValidEmailAddress } from '../../Utils/InputValidation'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';

export default class ContactUs extends React.Component {
  index = 'title'
  handleFocusNext = () => {
    switch (this.index) {
      case 'title':
        this.refs.formRef.refs.bodyRef.focus()
        this.index = 'body'
        break;
      case 'body':
        this.refs.formRef.refs.titleRef.focus()
        this.index = 'title'
        break;
      default:
        break;
    }
  }
  state = {
    body: '',
    email: ''
  }
  setMessageBody = (body) => {
    this.setState({body}) 
  }
  setMessageEmail = (email) => {
    this.setState({email})  
  }
  sendMessage = () => {
    if (this.state.body && isValidEmailAddress(this.state.email)) {
      this.props.submitMessage(this.state.email, this.state.body)    
    }
    else {
      showMessage({
        message: 'Your question has been submitted',
        hideOnPress: true,
        autoHide: false,
        type: 'success',
      });
    }
  }
  render() {
    var {
      clear
    } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <BlackX onPress={() => goBack()}/>

        <Text style={styles.titleText}>
          Contact us
        </Text>

        <QuestionComponent
          ref="formRef"
          style={styles.questionContainer}
          offset={10}
          clear={clear}
          titlePlaceHolder={'Email'}
          bodyPlaceHolder={'write your message here'}
          setQuestionBody={(body) => this.setMessageBody(body)}
          setQuestionTitle={(email) => this.setMessageEmail(email)}
        />

        <SubmitBtn
          style={styles.btnStyle}
          text={'SEND'}
          textStyle={styles.textStyle}
          onPress={()=> this.sendMessage()}
        />
        <KeyboardAccessoryNavigation
          //avoidKeyboard={true}
          tintColor={'#0b7f7c'}
          nextDisabled={false}
          previousDisabled={false}
          nextHidden={false}
          previousHidden={false}
          onNext={this.handleFocusNext}
          onPrevious={this.handleFocusNext}
        />
      </SafeAreaView>
    );
  }
}

