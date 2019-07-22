import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import SearchComponent from '../../Components/QuestionsList/SearchComponent'
import QuestionsList from '../../Components/LawyerQuestionsList/QuestionsList'
import Spinner from '../../Screens/Spinner'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';

export default class NewQuestionsScreen extends React.Component {
  componentWillMount(){
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {
      if(this.props.isLoggedUser){
        this.props.getLawyerNewQuestionsRequest()
      }
    });
  }
  componentWillUnmount(){
    this.willFocusSubscription.remove();
  }
  render() {
    
    var {
      currentUser,
      isLoggedUser,
      accessToken,

      questions,
      questionsLoading,
      loadingMore,
      noMore,

      getLawyerNewQuestionsRequest,
      searchLawyerNewQuestionsRequest,
      filterLawyerNewQuestionsRequest,
      getLawyerNewQuestionsLoadMore

    } = this.props

    // if(getLawyerNewQuestionsLoading){
    //   return (<Spinner/>)
    // }

    return (
      <SafeAreaView style={styles.container}>
        <SelectComponent 
          onSelect={(topicID)=>filterLawyerNewQuestionsRequest(topicID)}
        />
        <SearchComponent 
          onSearch={(query)=>searchLawyerNewQuestionsRequest(query)}
          onCancel={()=>getLawyerNewQuestionsRequest()}
        />
        <QuestionsList 
          refresh={() => getLawyerNewQuestionsRequest()}
          loadMore={() => getLawyerNewQuestionsLoadMore()}
          questions={questions}
          questionsLoading={questionsLoading}
          questionsLoadingMore={loadingMore}
          questionsNoMore={noMore}
          screen={'New'}
        />
        <KeyboardAccessoryNavigation
          //avoidKeyboard={true}
          tintColor={'#0b7f7c'}
          nextDisabled={true}
          previousDisabled={true}
          nextHidden={true}
          previousHidden={true}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#f6f6f6',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});