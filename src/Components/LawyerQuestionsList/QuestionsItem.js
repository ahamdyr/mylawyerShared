import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { WIDTH, MAIN_COLOR } from '../Constants';
import Topic from '../Common/Topic'
import AnswerBy from '../Common/AnswerBy'
import SubmitBtn from '../Common/SubmitBtn'
import LockTimer from './LockTimer'
import { navigate } from '../../Services/NavigationServices'
import Store from '../../Redux/Store'
class QuestionsItem extends React.PureComponent {
  render() {
    //var isLoggedUser = Store.getState().isLoggedUser
    //var routeName = this.props.navigation.state.routeName
    var screen = this.props.screen
    var question = this.props.item.item
    var {
      id,
      title,
      body,
      topic,
      addedOn,
      by,
      lastActivity
    } = question
    return (
      <View style={styles.questCard}>
        <TouchableOpacity
          activeOpacity={1}
          style={{ flex: 1, flexDirection: 'column' }}
          onPress={() => {
            // isLoggedUser?
            // routeName == 'AllQuestions'
            //   ? this.props.navigation.navigate('PublicQuestionScreen', { question: question })
            //   : this.props.navigation.navigate('PrivateQuestionScreen', { question: question })
            // : navigate('SocialScreen')
          }}
        >
          <Topic
            authorName={by.name}
            //topicName={`${topic.name.split(' ')[0]}...`}
            topicName={topic.name}
            title={title}
          />
          {
            //screen == 'Solved' ?
            lastActivity.type == 'answer' ?
              <AnswerBy
                MainPhotoURL={lastActivity.by.photo}
                answeredBy={lastActivity.by.name}
                answerDate={lastActivity.addedOn}
                style={{
                  marginLeft: 16,
                  marginTop: 15.5,
                  marginBottom: 18
                }}
              />
              //: screen == 'Locked' || (screen == 'New' && lastActivity.type == 'lock')  ?
              : lastActivity.type == 'lock' ?
                <React.Fragment>
                  <SubmitBtn 
                    style={styles.answerBtnStyle}
                    text={'Answer question'}
                    textStyle={styles.answerTextStyle}
                    onPress={()=>navigate('AnswerQuestionScreen', {question: question})}
                  />
                  <LockTimer 
                    lockDate={lastActivity.addedOn}
                    style={{ marginBottom: 13, marginLeft: 16 }}
                  />
                </React.Fragment>
                : <SubmitBtn 
                    style={styles.viewBtnStyle}
                    text={'View question…'}
                    textStyle={styles.viewTextStyle}
                    onPress={()=>navigate('ViewQuestionScreen', {question: question})}
                  />
          }


        </TouchableOpacity>
      </View>
    );
  }
}
export default QuestionsItem
const styles = StyleSheet.create({
  questCard: {
    flex: 1,
    marginBottom: 10,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    width: WIDTH,
    backgroundColor: 'white'
  },
  viewBtnStyle: {
    marginTop: 17,
    marginBottom: 15,
    width: WIDTH - 32,
    height: 38,
    borderRadius: 28,
    borderWidth: 0.5,
    borderColor: MAIN_COLOR,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: "rgba(255, 255, 255, 0.25)",
    // shadowOffset: {
    //   width: 0,
    //   height: 18
    // },
    // shadowRadius: 40,
    // shadowOpacity: 1,
  },
  viewTextStyle: {
    fontFamily: "Lato-Bold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: "#0b7f7c"
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
});