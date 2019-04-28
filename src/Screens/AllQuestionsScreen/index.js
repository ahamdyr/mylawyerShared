import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AllQuestionsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>All Questions!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});