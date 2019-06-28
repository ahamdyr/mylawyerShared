import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from './Styles'
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import BlackX from '../../Components/Common/BlackX'
import QuestionComponent from '../../Components/QuestionComponents/Question'
import Footer from '../../Components/QuestionComponents/Footer'
import Attachments from '../../Components/QuestionComponents/Attachments'
import AskTitle from '../../Components/QuestionComponents/AskTitle'
import Spinner from '../Spinner'

export default class AskQuestion extends React.Component {
  render() {
    var {
      docs,
      imgs,
      setQuestionBody,
      setQuestionTitle,
      setQuestionDoc,
      setQuestionImg,
      submitQuestion,
      delQuestionImg,
      delQuestionDoc,
      setQuestionTopic,
      isLoggedUser,
      currentUser,
      questionBody,
      questionTitle,
      questionTopic,
      addQuestionLoading
    } = this.props
    var attachs = [...docs, ...imgs]
    
    if(addQuestionLoading){
      return (
        <SafeAreaView style={{
          backgroundColor: 'transparent',
          flex: 1
        }}>
          <Spinner style={{
            backgroundColor: 'transparent',
            flex: 1
          }}/>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.container}>

        <BlackX
          onPress={() => this.props.navigation.goBack()}
        />

        <AskTitle />

        <SelectComponent
          onSelect={(topic) => setQuestionTopic(topic)}
          style={styles.select}
        />

        <QuestionComponent 
          partial={attachs.length}
          setQuestionBody={(body)=>setQuestionBody(body)}
          setQuestionTitle={(title)=>setQuestionTitle(title)}
        />
    
        <Attachments
          attachs={attachs}
          delQuestionDoc={(doc)=>delQuestionDoc(doc)}
          delQuestionImg={(img)=>delQuestionImg(img)}
          style={{
            flex: 1,
            marginBottom: 55
          }}
        />
           
        <Footer
          setQuestionDoc={(x) => setQuestionDoc(x)}
          setQuestionImg={(y) => setQuestionImg(y)}
          submitQuestion={() => submitQuestion()}
          isLoggedUser={isLoggedUser}
          currentUser={currentUser}
          questionBody={questionBody}
          questionTitle={questionTitle}
          questionTopic={questionTopic}
          addQuestionLoading={addQuestionLoading}
        />

      </SafeAreaView>
    );
  }
}