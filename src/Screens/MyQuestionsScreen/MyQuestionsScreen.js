import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import SearchComponent from '../../Components/QuestionsList/SearchComponent'
import QuestionsList from '../../Components/QuestionsList/QuestionsList'
import { navigate } from '../../Services/NavigationServices'
import Spinner from '../Spinner'
export default class MyQuestionsScreen extends React.Component {
  componentWillMount(){
    if(this.props.isLoggedUser){
      this.props.getUserOwnQuestionsRequest(this.props.accessToken)
    }
    else{
      navigate('SocialScreen')
    }
  }
  render() {
    if(!this.props.isLoggedUser){
      return (null)
    }
    var {
      questions,
      currentUser,
      accessToken,
      isLoggedUser,
      getUserOwnQuestionsSuccess,
      getUserOwnQuestionsLoading,
      searchUserOwnQuestionsRequest
    } = this.props

    if(getUserOwnQuestionsLoading){
      return (<Spinner/>)
    }

    return (
      <View style={styles.container}>
        <SelectComponent 
          onSelected={()=>{}}
        />
        <SearchComponent onSearch={(query)=>searchUserOwnQuestionsRequest(accessToken, query)}></SearchComponent>
        <QuestionsList questions={questions}></QuestionsList>
      </View>
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