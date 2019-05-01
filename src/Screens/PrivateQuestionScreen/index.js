import React from 'react';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Topic from '../../Components/Common/Topic'
import AnswerBy from '../../Components/Common/AnswerBy'
import CloseIcon from '../../Components/Common/CloseIcon'
import { STATUS_BAR_HEIGHT, WIDTH } from '../../Components/Constants'
import Attachments from '../../Components/Common/Attachments'

export default class PrivateQuestionScreen extends React.Component {
  render() {
    const {MainPhotoURL, authorName, qIndex, content, answeredBy, answerDate, isAnswered, answer} = this.props.navigation.getParam('question')
    
    return (
      <View style={styles.container}>

        <CloseIcon 
          style={styles.closeIcon}
          onPress={()=>this.props.navigation.goBack()}
        />
        <Topic
          style={styles.topic}
          authorName={authorName}
          qIndex={qIndex}
          content={content}
        />
        <Attachments
          //style={styles.Attachments}
        />
        <AnswerBy
          MainPhotoURL={MainPhotoURL}
          answeredBy={answeredBy}
          answerDate={answerDate}
          style={styles.answered}
        />
        
        <ScrollView>
          <Text style={styles.answer}>
            {answer}
          </Text>
        </ScrollView>
        
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
  topic:{
    paddingBottom: 21,
      borderBottomWidth: 0.5,
      borderBottomColor: '#d5d5e0'
  },
  Attachments:{
    marginTop: 22.5,
    marginBottom: 31,
  },
  answered:{
    marginLeft: 16,
    marginTop: 31,
    marginBottom: 17,
  },
  textConatin:{
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  answer:{
    fontFamily:'Cairo-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.11,
    color: '#131314',
    marginHorizontal:16
  },
  closeIcon:{
    width:16.5,
    height: 16.5,
    borderRadius: 0.8,
    position: 'absolute',
    top: 20,
    right: 16
  }
});