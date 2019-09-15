import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground, Dimensions } from 'react-native';
import { WIDTH } from '../Constants';
import Topic from '../Common/Topic'
import AnswerBy from '../Common/AnswerBy'
import WaitingAnswer from '../Common/WaitingAnswer'
import { withNavigation } from 'react-navigation';
import SeperatorLine from '../Common/SeperatorLine'
import SubmitBtn from '../Common/SubmitBtn'
import {navigate} from '../../Services/NavigationServices'
import Store from '../../Redux/Store'
class QuestionsItem extends React.PureComponent {
  render() {
    let isLoggedUser = Store.getState().isLoggedUser
    const routeName =  this.props.navigation.state.routeName
    const {
      //MainPhotoURL, authorName, qIndex, content, answeredBy, answerDate, isAnswered       
        id,
        title,
        body,
        topic,
        addedOn,
        by,
        lastActivity
    } = this.props.item.item
    //console.log('this.props.item.item  ',this.props.item.item)
    return (
      <View style={styles.questCard}>
        <TouchableOpacity
          style={{ flex: 1, flexDirection:'column' }}
          onPress={()=>{
            // isLoggedUser?
            routeName == 'AllQuestions' 
            ? this.props.navigation.navigate('PublicQuestionScreen', {question:this.props.item.item})
            : this.props.navigation.navigate('PrivateQuestionScreen', {question:this.props.item.item})
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
            lastActivity.type == 'answer' ?
            <AnswerBy
              MainPhotoURL={lastActivity.by.photo}
              answeredBy={lastActivity.by.name}
              answerDate={lastActivity.addedOn}
              style={{
                marginLeft: 16,
                marginTop: 15.5,
                marginBottom: 23              
              }}
            />
            :lastActivity.type == 'lock' ?
            <AnswerBy
              MainPhotoURL={lastActivity.by.photo}
              answeredBy={lastActivity.by.name}
              answerDate={lastActivity.addedOn}
              lock={true}
              style={{
                marginLeft: 16,
                marginTop: 15.5,
                marginBottom: 23              
              }}
            />
            :<WaitingAnswer/>
          }
          {
            (routeName == 'MyQuestions' && lastActivity.type == 'answer' && lastActivity.rate == null) ?
            <React.Fragment>
                <SeperatorLine style={styles.line}/>
                <SubmitBtn  
                  style={styles.reviewBtn}
                  text={'Review answer'}
                  textStyle={styles.textStyle}
                  onPress={()=>navigate('PrivateQuestionScreen', {question:this.props.item.item})}
                  reviewBtn={true}
                />
            </React.Fragment>
            : null
          }
          
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(QuestionsItem)
const styles = StyleSheet.create({
  questCard: {
    flex: 1,
    marginBottom: 7.5,
    //height: 157.5,
    // borderBottomWidth: 3,
    // borderBottomColor: '#0b7f7c',
    width: WIDTH,
    backgroundColor: 'white'
  },
  line: {
    marginTop: 9,
    marginBottom: 11,
    width: WIDTH - 30,
    alignSelf: 'center',
    height: 1,
    backgroundColor: "#dedede"
  },
  reviewBtn: {
    marginBottom: 11,
    width: WIDTH - 30,
    alignSelf: 'center',
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0b7f7c"
  },
  textStyle: {
    fontFamily: "Lato-Heavy",
    fontSize: 14,
    fontWeight: "800",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
});