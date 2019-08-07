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
import { goBack } from '../../Services/NavigationServices'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';
export default class AskQuestion extends React.Component {
  index = 'title'
  handleFocusNext = () => {
    switch (this.index) {
      case 'title':
        //this.refs.formRef.refs.bodyRef.focus()
        this.refs.formRef._bodyRef.focus()
        this.index = 'body'
        break;
      case 'body':
        //this.refs.formRef.refs.titleRef.focus()
        this.refs.formRef._titleRef.focus()
        this.index = 'title'
        break;
      default:
        break;
    }
  }
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
      addQuestionLoading,
      clearQuestion
    } = this.props
    var attachs = [...docs, ...imgs]

    if (addQuestionLoading) {
      return (
        <SafeAreaView style={{
          backgroundColor: 'transparent',
          flex: 1
        }}>
          <Spinner style={{
            backgroundColor: 'transparent',
            flex: 1
          }} />
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <BlackX
          onPress={() => goBack()}
          style={styles.closeIcon}
        />

        <AskTitle />

        <SelectComponent
          onSelect={(topic) => setQuestionTopic(topic)}
          clear={clearQuestion}
          ask={true}
          style={styles.select}
          arrowBGColor={'white'}
        />

        <QuestionComponent
          ref="formRef"
          offset={10}
          partial={attachs.length}
          setQuestionBody={(body) => setQuestionBody(body)}
          setQuestionTitle={(title) => setQuestionTitle(title)}
          clear={clearQuestion}
        />

        <Attachments
          attachs={attachs}
          delQuestionDoc={(doc) => delQuestionDoc(doc)}
          delQuestionImg={(img) => delQuestionImg(img)}
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
        <KeyboardAccessoryNavigation
          //avoidKeyboard={true}
          inSafeAreaView={true}
          tintColor={'#0b7f7c'}
          nextDisabled={false}
          previousDisabled={false}
          nextHidden={false}
          previousHidden={false}
          onNext={this.handleFocusNext}
          onPrevious={this.handleFocusNext}
        />

      </SafeAreaView>
    );
  }
}