import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
  }
  render() {
    if (!this.props.isLoggedUser) {
      return (
        <View style={[styles.container, {
          alignItems: 'center',
          justifyContent: 'center',
        }]}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0b7f7c',
              height: 50,
              width: 150,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={()=>navigate('SocialScreen')}
          >
            <Text style={{
              fontSize: 16,
              color: 'white'
            }}>
              You have to log in!
            </Text>
          </TouchableOpacity>

        </View>
      )
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
        <SearchComponent 
          onSearch={(query)=>searchUserOwnQuestionsRequest(accessToken, query)}
        />
        <QuestionsList 
          questions={getUserOwnQuestionsSuccess}
          //questions={questions}
        />
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