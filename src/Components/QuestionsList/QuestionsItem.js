import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground, Dimensions } from 'react-native';
import { WIDTH } from '../Constants';
import Topic from '../Common/Topic'
import AnswerBy from '../Common/AnswerBy'
import WaitingAnswer from '../Common/WaitingAnswer'
import { withNavigation } from 'react-navigation';

class QuestionsItem extends React.Component {
  render() {
    const {MainPhotoURL, authorName, qIndex, content, answeredBy, answerDate, isAnswered } = this.props.item.item
    return (
      <View style={styles.questCard}>
        <TouchableOpacity
          style={{ flex: 1, flexDirection:'column' }}
          onPress={()=>this.props.navigation.navigate('PrivateQuestionScreen',{question:this.props.item.item})}
        >
          <Topic
            authorName={authorName}
            qIndex={qIndex}
            content={content}
          />
          {
            isAnswered ?
            <AnswerBy
              MainPhotoURL={MainPhotoURL}
              answeredBy={answeredBy}
              answerDate={answerDate}
              style={{
                marginLeft: 16,
                marginTop: 15.5,
                marginBottom: 23              
              }}
            />
            :<WaitingAnswer/>
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
  }
});