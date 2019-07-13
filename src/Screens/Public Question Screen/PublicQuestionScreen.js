import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Topic from '../../Components/Common/Topic'
import AnswerBy from '../../Components/Common/AnswerBy'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT, WIDTH } from '../../Components/Constants'
import WaitingAnswer from '../../Components/Common/WaitingAnswer'
import Spinner from '../Spinner'
export default class PublicQuestionScreen extends React.Component {
  componentWillMount(){
    this.props.getAnswersRequest(this.props.navigation.getParam('question').id)
    this.props.getAttachsRequest(this.props.navigation.getParam('question').id)
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
          topicName={topic.name}
          //topicName={`${topic.name.split(' ')[0]}...`}
          title={title}
        />
        {
          lastActivity.type !== 'answer' ?
            <WaitingAnswer />
            : answersLoading ?
              <Spinner />
              : <ScrollView>
              {
                answers.map((answer) => (
                  <React.Fragment key={answer.id}>
                    <AnswerBy
                      MainPhotoURL={answer.by.photo}
                      answeredBy={answer.by.name}
                      answerDate={answer.addedOn}
                      style={styles.answered}
                    />
                    <ScrollView style={{ marginHorizontal: 20, marginVertical: 20 }} >
                      <Text style={styles.answer}>
                        {answer.body}
                      </Text>
                    </ScrollView>                    
                  </React.Fragment>
                ))
              }
            </ScrollView>
        }
      </SafeAreaView>
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
  answered: {
    marginLeft: 16,
    marginTop: 19,
    marginBottom: 17,
  },
  textConatin: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  answer: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#454546",
    //marginHorizontal: 16
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