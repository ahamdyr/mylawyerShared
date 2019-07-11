import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Topic from '../../Components/Common/Topic'
import AnswerBy from '../../Components/Common/AnswerBy'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT, WIDTH } from '../../Components/Constants'
import AttachmentBtn from '../../Components/Common/AttachmentBtn'
import WaitingAnswer from '../../Components/Common/WaitingAnswer'
import Spinner from '../Spinner'
import RatingView from '../../Components/Lawyers List/RatingView';
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import { mockAnswers } from '../../Services/BackendServices/MockData'
import { reviewAnswerApi } from '../../Services/BackendServices/AnswerServices'
import { reAskApi } from '../../Services/BackendServices/LockService'
import { navigate, goBack } from '../../Services/NavigationServices'
export default class PrivateQuestionScreen extends React.Component {

  _question = this.props.navigation.getParam('question')
  _accessToken = this.props.accessToken

  componentWillMount() {
    this.props.getAnswersRequest(this._question.id)
    this.props.getAttachsRequest(this._question.id)
  }
  _rateAnswer = async (rate, answerID) => {
    try {
      navigate('Spinner')
      var res = await reviewAnswerApi(answerID, this._accessToken, rate)
      showMessage({
        message: `Your rate has been sent`,
        hideOnPress: true,
        autoHide: false,
        type: 'success',
      });
      goBack()
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
  _reAsk = async () => {
    try {
      navigate('Spinner')
      var res = await reAskApi(this._question.id, this._accessToken)
      showMessage({
        message: `Your question has been re-posted`,
        hideOnPress: true,
        autoHide: false,
        type: 'success',
      });
      navigate('AllQuestions')
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
          title={title}
        />
        <AttachmentBtn
          //attachs={attachs[id]}
          attachs={attachs}
          attachsLoading={attachsLoading}
        //style={styles.Attachments}
        />
        {
          lastActivity.type !== 'answer' ?
            <WaitingAnswer />
            : answersLoading ?
              <Spinner />
              : <ScrollView>
                {
                  mockAnswers.map((answer) => (
                    <React.Fragment key={answer.id}>
                      <AnswerBy
                        MainPhotoURL={answer.by.photo}
                        answeredBy={answer.by.name}
                        answerDate={answer.addedOn}
                        style={styles.answered}
                      />
                      <ScrollView style={{ marginHorizontal: 20 }} >
                        <Text style={styles.answer}>
                          {answer.body}
                        </Text>
                      </ScrollView>
                      {
                        answer.rate == null ?
                          <React.Fragment>
                            <RatingView
                              disabled={false}
                              onPress={(rate) => this._rateAnswer(rate, answer.id)}
                              style={styles.ratingStyle}
                              starStyle={styles.starStyle}
                            />
                            <Text style={styles.reAskText} >
                              {`Not a good answer?`}
                            </Text>
                            <SubmitBtn
                              style={styles.reAskBtn}
                              text={`Re-post this question`}
                              textStyle={styles.reAskBtnTitle}
                              onPress={() => this._reAsk()}
                            />
                          </React.Fragment>
                          : null
                      }
                      <SeperatorLine style={styles.line} />
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
  ratingStyle: {
    alignSelf: 'center',
    width: WIDTH / 2,
    marginBottom: 20,
  },
  starStyle: {
    width: 21,
    height: 21
  },
  line: {
    width: WIDTH - 40,
    alignSelf: 'center',
    height: 1,
    backgroundColor: "#dedede"
  },
  reAskBtn: {
    marginVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH - 30,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#db3030"
  },
  reAskBtnTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#db3030"
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
  reAskText: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#454546"
  },
  answer: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.11,
    color: '#131314',
    // marginHorizontal: 16
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