import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import SearchComponent from '../../Components/QuestionsList/SearchComponent'
import QuestionsList from '../../Components/LawyerQuestionsList/QuestionsList'
import { navigate } from '../../Services/NavigationServices'
import Spinner from '../../Screens/Spinner'

export default class LockedQuestionsScreen extends React.Component {
  componentWillMount(){
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {
      if(this.props.isLoggedUser){
        this.props.getLawyerLockedQuestionsRequest()
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

      getLawyerLockedQuestionsRequest,
      searchLawyerLockedQuestionsRequest,
      filterLawyerLockedQuestionsRequest,
      getLawyerLockedQuestionsLoadMore

    } = this.props

    // if(getLawyerLockedQuestionsLoading){
    //   return (<Spinner/>)
    // }

    return (
      <SafeAreaView style={styles.container}>
        <SelectComponent 
          onSelect={(topicID)=>filterLawyerLockedQuestionsRequest(topicID)}
        />
        <SearchComponent 
          onSearch={(query)=>searchLawyerLockedQuestionsRequest(query)}
          onCancel={()=>getLawyerLockedQuestionsRequest()}
        />
        <QuestionsList 
          refresh={() => getLawyerLockedQuestionsRequest()}
          loadMore={() => getLawyerLockedQuestionsLoadMore()}
          questions={questions}
          questionsLoading={questionsLoading}
          questionsLoadingMore={loadingMore}
          questionsNoMore={noMore}
          screen={'Locked'}
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