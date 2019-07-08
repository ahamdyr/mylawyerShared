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
    var {
      id,
      title,
      body,
      topic,
      addedOn,
      by,
      lastActivity
    } = this.props.item.item
    return (
      <View style={styles.questCard}>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: 'column' }}
          onPress={() => {
            // isLoggedUser?
            // routeName == 'AllQuestions'
            //   ? this.props.navigation.navigate('PublicQuestionScreen', { question: this.props.item.item })
            //   : this.props.navigation.navigate('PrivateQuestionScreen', { question: this.props.item.item })
            // : navigate('SocialScreen')
          }}
        >
          <Topic
            authorName={by.name}
            topicName={`${topic.name.split(' ')[0]}...`}
            title={title}
          />
          {
            screen == 'solved' ?
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
              : screen == 'locked' ?
                <React.Fragment>
                  <SubmitBtn 
                    style={styles.answerBtnStyle}
                    text={'Answer question'}
                    textStyle={styles.answerTextStyle}
                    onPress={()=>navigate('AnswerQuestionScreen', {question: this.props.item.item})}
                  />
                  <LockTimer style={{ marginBottom: 13, marginLeft: 16 }}/>
                </React.Fragment>
                : <SubmitBtn 
                    style={styles.viewBtnStyle}
                    text={'View question…'}
                    textStyle={styles.viewTextStyle}
                    onPress={()=>navigate('ViewQuestionScreen', {question: this.props.item.item})}
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
    //height: 157.5,
    // borderBottomWidth: 3,
    // borderBottomColor: '#0b7f7c',
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