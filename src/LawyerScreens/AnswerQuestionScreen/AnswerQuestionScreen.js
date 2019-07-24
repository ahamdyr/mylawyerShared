import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Topic from '../../Components/Common/Topic'
import BlackX from '../../Components/Common/BlackX'
import { STATUS_BAR_HEIGHT } from '../../Components/Constants'
import AttachmentBtn from '../../Components/Common/AttachmentBtn'
import AnswerComponent from '../../Components/LawyerQuestionsList/AnswerComponent'
import { navigate, goBack } from '../../Services/NavigationServices'
import { answerApi } from '../../Services/BackendServices/AnswerServices'
import { addQuestionAttachsService } from '../../Services/BackendServices/QuestionAttachs'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
import Store from '../../Redux/Store'
import { deleteAttachments } from '../../Redux/AddQuestion/actions'

export default class AnswerQuestionScreen extends React.Component {

  _question = this.props.navigation.getParam('question')
  _accessToken = this.props.accessToken
  
  _answerQuestion = async (answer) => {
    try {
      navigate('Spinner')
      var attachments = [...this.props.docs, ...this.props.imgs]
      await addQuestionAttachsService(attachments, this._question.id, this._accessToken)
      var res = await answerApi(this._question.id, this._accessToken, answer)
      Store.dispatch(deleteAttachments())
      showMessage({
        message: `Your answer has been sent.`,
        hideOnPress: true,
        duration: 3000,
        type: 'success'
      });
      navigate('SolvedQuestionsScreen')
    } catch (error) {
      showMessage({
        message: `${error}\nTry again!`,
        hideOnPress: true,
        duration: 3000,
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
      attachsLoading,
      setQuestionDoc,
      setQuestionImg,
      delQuestionImg,
      delQuestionDoc,
      docs,
      imgs,
    } = this.props
    var newAttachs = [...docs, ...imgs]
    attachs = [...attachs, ...newAttachs]
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
              delQuestionDoc={(doc) => delQuestionDoc(doc)}
              delQuestionImg={(img) => delQuestionImg(img)}
              //style={styles.Attachments}
            />
            : null
        }
        <AnswerComponent
          setQuestionDoc={(x) => setQuestionDoc(x)}
          setQuestionImg={(y) => setQuestionImg(y)}
          onSubmit={(answer)=>this._answerQuestion(answer)}
          offset={attachs.length ? 270 : 220}
        />
        {
          Platform.OS == 'ios' ?
            <KeyboardAccessoryNavigation
              //avoidKeyboard={true}
              tintColor={'#0b7f7c'}
              nextDisabled={true}
              previousDisabled={true}
              nextHidden={true}
              previousHidden={true}
            />
            : null
        }
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