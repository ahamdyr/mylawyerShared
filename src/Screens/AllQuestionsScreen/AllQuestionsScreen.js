import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import SearchComponent from '../../Components/QuestionsList/SearchComponent'
import QuestionsList from '../../Components/QuestionsList/QuestionsList'
import Spinner from '../Spinner'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';

export default class AllQuestionsScreen extends React.Component {
  componentWillMount(){
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {
      this.props.getUserAllQuestionsRequest()   
    });
  }
  componentWillUnmount(){
    this.willFocusSubscription.remove();
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