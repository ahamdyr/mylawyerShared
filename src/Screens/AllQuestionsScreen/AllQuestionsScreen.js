import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'
import SearchComponent from '../../Components/QuestionsList/SearchComponent'
import QuestionsList from '../../Components/QuestionsList/QuestionsList'

export default class AllQuestionsScreen extends React.Component {
  render() {
    var {
      questions
    } = this.props
    return (
      <View style={styles.container}>
        <SelectComponent 
          onSelected={()=>{}}
        />
        <SearchComponent></SearchComponent>
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