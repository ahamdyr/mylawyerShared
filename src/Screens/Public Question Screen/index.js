import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Topic from '../../Components/Common/Topic'
import AnswerBy from '../../Components/Common/AnswerBy'
export default class PublicQuestionScreen extends React.Component {
  render() {
    const {MainPhotoURL, authorName, qIndex, content, answeredBy, answerDate, isAnswered, answer} = this.props.navigation.getParam('question')
    
    return (
      <View style={styles.container}>
        <Topic
          style={styles.topic}
          authorName={authorName}
          qIndex={qIndex}
          content={content}
        />
        <AnswerBy
          MainPhotoURL={MainPhotoURL}
          answeredBy={answeredBy}
          answerDate={answerDate}
          style={styles.answered}
        />
        <View style={styles.textConatin}>
          <Text style={styles.answer}>
            {answer}
          </Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  topic:{
    paddingBottom: 21,
      borderBottomWidth: 0.5,
      borderBottomColor: '#d5d5e0'
  },
  answered:{
    marginLeft: 16,
    marginTop: 19,
    paddingBottom: 17              
  },
  textConatin:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answer:{
    fontFamily:'Cairo-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.11,
    color: '#131314',
    marginHorizontal:16
  }
});