import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput } from "react-native";
import Topic from '../../Components/Common/Topic'
import AnswerBy from '../../Components/Common/AnswerBy'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT, WIDTH, HEIGHT } from '../../Components/Constants'
import AttachmentBtn from '../../Components/Common/AttachmentBtn'
import AnswerComponent from '../../Components/LawyerQuestionsList/AnswerComponent'
import Spinner from '../../Screens/Spinner'
export default class AnswerQuestionScreen extends React.Component {
  componentWillMount(){
    // this.props.getAnswersRequest(this.props.navigation.getParam('question').id)
    // this.props.getAttachsRequest(this.props.navigation.getParam('question').id)
  }
  render() {
    //console.log('HEIGHT/3  ',HEIGHT/3)
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
          topicName={topic.name}
          title={title}
        />
        {
          attachs.length ?
            <AttachmentBtn
              //attachs={attachs[id]}
              attachs={attachs}
              attachsLoading={attachsLoading}
              //style={styles.Attachments}
            />
            : null          
        }
        <AnswerComponent
          offset={attachs.length ? 270 : 220}
        />
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
    backgroundColor: "#f6f6f6",
  },
  Attachments: {
    marginTop: 22.5,
    marginBottom: 31,
  },
  answered: {
    marginLeft: 16,
    marginTop: 31,
    marginBottom: 17,
  },
  textConatin: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  answer: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.11,
    color: '#131314',
    marginHorizontal: 16
  },
  closeIcon: {
    width: 16.5,
    height: 16.5,
    borderRadius: 0.8,
    position: 'absolute',
    top: 20,
    right: 16
  }
});