import React from 'react';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Topic from '../../Components/Common/Topic'
import AnswerBy from '../../Components/Common/AnswerBy'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT, WIDTH } from '../../Components/Constants'
import AttachmentBtn from '../../Components/Common/AttachmentBtn'
import WaitingAnswer from '../../Components/Common/WaitingAnswer'
export default class PrivateQuestionScreen extends React.Component {
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
      attachs
    } = this.props
    return (
      <View style={styles.container}>

        <BlackX
          onPress={() => this.props.navigation.goBack()}
        />
        <Topic
          style={styles.topic}
          authorName={by.name}
          topicName={topic.name}
          title={title}
        />
        <AttachmentBtn
          attachs={attachs[id]}
        //style={styles.Attachments}
        />
        {
          lastActivity.type == 'answer' ?
            <React.Fragment>
              <AnswerBy
                MainPhotoURL={lastActivity.by.photo}
                answeredBy={lastActivity.by.name}
                answerDate={lastActivity.addedOn}
                style={styles.answered}
              />
              <ScrollView>
                <Text style={styles.answer}>
                  {answers[0].body}
                </Text>
              </ScrollView>
            </React.Fragment>
            : <WaitingAnswer />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: WIDTH,  
    backgroundColor: 'white',
    flexDirection: 'column',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    marginTop: STATUS_BAR_HEIGHT
  },
  topic: {
    marginTop: 50,
    paddingBottom: 21,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d5d5e0'
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