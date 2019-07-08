import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Topic from '../../Components/Common/Topic'
import AnswerBy from '../../Components/Common/AnswerBy'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT, WIDTH } from '../../Components/Constants'
import WaitingAnswer from '../../Components/Common/WaitingAnswer'
import Spinner from '../../Screens/Spinner'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import { goBack, navigate} from '../../Services/NavigationServices'

export default class ViewQuestionScreen extends React.Component {
  componentWillMount(){
    // this.props.getAnswersRequest(this.props.navigation.getParam('question').id)
    // this.props.getAttachsRequest(this.props.navigation.getParam('question').id)
  }
  render() {
    const {
      //MainPhotoURL, authorName, qIndex, content, answeredBy, answerDate, isAnswered, answer 
      id,
      title,
      body,
      topic,
      addedOn,
      by,
      lastActivity
    } = this.props.navigation.getParam('question')
    var {
      answers,
      attachs,
      answersLoading,
      attachsLoading
    } = this.props
    return (
      <SafeAreaView style={styles.container}>

        <BlackX
          onPress={() => this.props.navigation.goBack()}
        />
        <Topic
          style={styles.topic}
          authorName={by.name}
          topicName={`${topic.name.split(' ')[0]}...`}
          title={title}
        />
        <SubmitBtn 
          style={styles.answerBtnStyle}
          text={'Add to my questions'}
          textStyle={styles.answerTextStyle}
          onPress={()=>navigate('AnswerQuestionScreen', {question: this.props.navigation.getParam('question')})}
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
  // answered: {
  //   marginLeft: 16,
  //   marginTop: 19,
  //   marginBottom: 17,
  // },
  // textConatin: {
  //   flexDirection: 'row',
  //   alignItems: 'flex-start',
  //   justifyContent: 'flex-start'
  // },
  // answer: {
  //   fontFamily: 'Cairo-Regular',
  //   fontSize: 14,
  //   lineHeight: 20,
  //   letterSpacing: 0.11,
  //   color: '#131314',
  //   marginHorizontal: 16
  // },
  // closeIcon: {
  //   width: 16.5,
  //   height: 16.5,
  //   borderRadius: 0.8,
  //   position: 'absolute',
  //   top: 20,
  //   right: 16
  // }
});