import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import SearchComponent from '../../Components/QuestionsList/SearchComponent'
import QuestionsList from '../../Components/QuestionsList/QuestionsList'
import Spinner from '../Spinner'

export default class AllQuestionsScreen extends React.Component {
  componentWillMount(){
    this.props.getUserAllQuestionsRequest()    
  }
  render() {
    var {
      questions,
      getUserAllQuestionsLoading,
      getUserAllQuestionsSuccess,
      getUserAllQuestionsLoadingMore,
      getUserAllQuestionsNoMore,

      getUserAllQuestionsRequest,
      searchUserAllQuestionsRequest,
      filterUserAllQuestionsRequest,
      getUserAllQuestionsLoadMore,
    } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <SelectComponent 
          onSelect={(topicID)=>filterUserAllQuestionsRequest(topicID)}
        />
        <SearchComponent 
          onSearch={(query)=>searchUserAllQuestionsRequest(query)}
          onCancel={()=>getUserAllQuestionsRequest()}
        />
        <QuestionsList
          refresh={() => getUserAllQuestionsRequest()}
          loadMore={() => getUserAllQuestionsLoadMore()}
          questions={getUserAllQuestionsSuccess}
          questionsLoading={getUserAllQuestionsLoading}
          questionsLoadingMore={getUserAllQuestionsLoadingMore}
          questionsNoMore={getUserAllQuestionsNoMore}
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