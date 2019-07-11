import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import SearchComponent from '../../Components/QuestionsList/SearchComponent'
import QuestionsList from '../../Components/LawyerQuestionsList/QuestionsList'
import Spinner from '../../Screens/Spinner'

export default class AllQuestionsScreen extends React.Component {
  componentWillMount(){
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {
      if(this.props.isLoggedUser){
        this.props.getLawyerAllQuestionsRequest()
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

      getLawyerAllQuestionsRequest,
      searchLawyerAllQuestionsRequest,
      filterLawyerAllQuestionsRequest,
      getLawyerAllQuestionsLoadMore

    } = this.props

    // if(getLawyerAllQuestionsLoading){
    //   return (<Spinner/>)
    // }

    return (
      <SafeAreaView style={styles.container}>
        <SelectComponent 
          onSelect={(topicID)=>filterLawyerAllQuestionsRequest(topicID)}
        />
        <SearchComponent 
          onSearch={(query)=>searchLawyerAllQuestionsRequest(query)}
          onCancel={()=>getLawyerAllQuestionsRequest()}
        />
        <QuestionsList 
          refresh={() => getLawyerAllQuestionsRequest()}
          loadMore={() => getLawyerAllQuestionsLoadMore()}
          questions={questions}
          questionsLoading={questionsLoading}
          questionsLoadingMore={loadingMore}
          questionsNoMore={noMore}
          screen={'All'}
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