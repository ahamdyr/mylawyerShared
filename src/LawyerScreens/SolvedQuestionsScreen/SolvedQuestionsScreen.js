import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import SearchComponent from '../../Components/QuestionsList/SearchComponent'
import QuestionsList from '../../Components/LawyerQuestionsList/QuestionsList'
import { navigate } from '../../Services/NavigationServices'
import Spinner from '../../Screens/Spinner'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';

export default class SolvedQuestionsScreen extends React.Component {
  componentWillMount(){
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {
      if(this.props.isLoggedUser){
        this.props.getLawyerSolvedQuestionsRequest()
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

      getLawyerSolvedQuestionsRequest,
      searchLawyerSolvedQuestionsRequest,
      filterLawyerSolvedQuestionsRequest,
      getLawyerSolvedQuestionsLoadMore

    } = this.props

    // if(getLawyerSolvedQuestionsLoading){
    //   return (<Spinner/>)
    // }

    return (
      <SafeAreaView style={styles.container}>
        <SelectComponent 
          onSelect={(topicID)=>filterLawyerSolvedQuestionsRequest(topicID)}
        />
        <SearchComponent 
          onSearch={(query)=>searchLawyerSolvedQuestionsRequest(query)}
          onCancel={()=>getLawyerSolvedQuestionsRequest()}
        />
        <QuestionsList 
          refresh={() => getLawyerSolvedQuestionsRequest()}
          loadMore={() => getLawyerSolvedQuestionsLoadMore()}
          questions={questions}
          questionsLoading={questionsLoading}
          questionsLoadingMore={loadingMore}
          questionsNoMore={noMore}
          screen={'Solved'}
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
    backgroundColor: "#f6f6f6",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});