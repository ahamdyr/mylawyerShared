import React from 'react';
import { StyleSheet, SafeAreaView } from "react-native";
import Topic from '../../Components/Common/Topic'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT } from '../../Components/Constants'
import AttachmentBtn from '../../Components/Common/AttachmentBtn'
import AnswerComponent from '../../Components/LawyerQuestionsList/AnswerComponent'
import { navigate, goBack } from '../../Services/NavigationServices'
import { answerApi } from '../../Services/BackendServices/AnswerServices'

export default class AnswerQuestionScreen extends React.Component {

  _question = this.props.navigation.getParam('question')
  _accessToken = this.props.accessToken
  
  _answerQuestion = async (answer) => {
    try {
      navigate('Spinner')
      var res = await answerApi(this._question.id, this._accessToken, answer)
      showMessage({
        message: `Your answer has been sent.`,
        hideOnPress: true,
        autoHide: false,
        type: 'success'
      });
      navigate('SolvedQuestionsScreen')
    } catch (error) {
      showMessage({
        message: `${error}\nTry again!`,
        hideOnPress: true,
        autoHide: false,
        type: 'danger',
      });
      goBack()
    }
  }

  componentWillMount() {
    this.props.getAttachsRequest(this._question.id)
    // this.props.getAnswersRequest(this.props.navigation.getParam('question').id)
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
    var {
      //answers,
      attachs,
      //answersLoading,
      attachsLoading
    } = this.props
    return (
      <SafeAreaView style={styles.container}>

        <BlackX
          onPress={() => navigate('NewQuestionsScreen')}
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
          onSubmit={(answer)=>this._answerQuestion(answer)}
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