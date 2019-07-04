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
export default class ContactUs extends React.Component {
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
      alert('Your query must have at least valid email and message')
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
      </SafeAreaView>
    );
  }
}

