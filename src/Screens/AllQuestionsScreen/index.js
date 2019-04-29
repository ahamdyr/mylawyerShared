import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectComponent from '../../Components/QuestionsList/SelectComponent'

export default class AllQuestionsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SelectComponent></SelectComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f6f6f6',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});