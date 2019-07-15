import React from 'react';
import { StyleSheet, Text, SafeAreaView, Alert } from "react-native";
import Topic from '../../Components/Common/Topic'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT, WIDTH } from '../../Components/Constants'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import { navigate, goBack } from '../../Services/NavigationServices'
import { lockApi } from '../../Services/BackendServices/LockService'

export default class ViewQuestionScreen extends React.Component {
  
  _question = this.props.navigation.getParam('question')
  _accessToken = this.props.accessToken

  _onSubmit = () => {
    Alert.alert('Lock', 'Are you sure you want to lock this question to answer it within 24 hours ?', [
      {
        text: 'OK', onPress: ()=>this._lockQuestion() , style: 'default' 
      },
      {
        text: 'Cancel', style: 'cancel'
      }
    ])
  }
  _lockQuestion = async () => {
    try {
      navigate('Spinner')
      var res = await lockApi(this._question.id, this._accessToken)
      showMessage({
        message: `You have 24 hours to answer.\nGood Luck`,
        hideOnPress: true,
        duration: 3000,    
        type: 'success',
      });
      navigate('AnswerQuestionScreen', {question:this._question})
    } catch (error) {
      showMessage({
        message: `${error}`,
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      });
      goBack()
    }
  }
  render() {
    const {
      id,
      title,
      body,
      topic,
      addedOn,
      by,
      lastActivity
    } = this._question
    
    return (
      <SafeAreaView style={styles.container}>

        <BlackX
          onPress={() => this.props.navigation.goBack()}
        />
        <Topic
          style={styles.topic}
          authorName={by.name}
          //topicName={`${topic.name.split(' ')[0]}...`}
          topicName={topic.name}
          title={title}
        />
        <SubmitBtn 
          style={styles.answerBtnStyle}
          text={'Add to my questions'}
          textStyle={styles.answerTextStyle}
          onPress={()=>this._onSubmit()}
        />
        <Text style={styles.hintStyle}>
          {`Please note that the question will be locked to you until you answer it`}
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: WIDTH,  
    backgroundColor: "#f6f6f6",
    flexDirection: 'column',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    marginTop: STATUS_BAR_HEIGHT
  },
  topic: {
    marginTop: 50,
    paddingBottom: 21,
    borderBottomWidth: 0.5,
    backgroundColor: "#f6f6f6",
    borderBottomColor: '#d5d5e0'
  },
  answerBtnStyle: {
    marginTop: 20,
    marginBottom: 12,
    width: WIDTH - 32,
    height: 38,
    borderRadius: 28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0b7f7c",
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 18
    },
    shadowRadius: 40,
    shadowOpacity: 1
  },
  answerTextStyle:{
    fontFamily: "Lato-Bold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  hintStyle:{
    alignSelf: 'center',
    width: 266,
    height: 30,
    fontFamily: "Lato-Regular",
    fontSize: 12,
    // fontWeight: "600",
    // fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#454546"
  },
});