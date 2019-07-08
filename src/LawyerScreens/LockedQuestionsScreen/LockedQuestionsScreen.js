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
        this.props.getUserOwnQuestionsRequest()
      }
    });
  }
  componentWillUnmount(){
    this.willFocusSubscription.remove();
  }
  render() {
    // if (!this.props.isLoggedUser) {
    //   return (
    //     <SafeAreaView style={[styles.container, {
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     }]}>
    //       <TouchableOpacity
    //         style={{
    //           backgroundColor: '#0b7f7c',
    //           height: 50,
    //           width: 150,
    //           borderRadius: 10,
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //         }}
    //         onPress={()=>navigate('SocialScreen')}
    //       >
    //         <Text style={{
    //           fontSize: 16,
    //           color: 'white'
    //         }}>
    //           You have to log in!
    //         </Text>
    //       </TouchableOpacity>

    //     </SafeAreaView>
    //   )
    // }
    var {
      currentUser,
      isLoggedUser,
      accessToken,

      questions,
      questionsLoading,
      loadingMore,
      noMore,

      getUserOwnQuestionsRequest,
      searchUserOwnQuestionsRequest,
      filterUserOwnQuestionsRequest,
      getUserOwnQuestionsLoadMore

    } = this.props

    // if(getUserOwnQuestionsLoading){
    //   return (<Spinner/>)
    // }

    return (
      <SafeAreaView style={styles.container}>
        <SelectComponent 
          onSelect={(topicID)=>filterUserOwnQuestionsRequest(topicID)}
        />
        <SearchComponent 
          onSearch={(query)=>searchUserOwnQuestionsRequest(query)}
          onCancel={()=>getUserOwnQuestionsRequest()}
        />
        <QuestionsList 
          refresh={() => getUserOwnQuestionsRequest()}
          loadMore={() => getUserOwnQuestionsLoadMore()}
          questions={questions}
          questionsLoading={questionsLoading}
          questionsLoadingMore={loadingMore}
          questionsNoMore={noMore}
          screen={'locked'}
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