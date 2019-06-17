import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Step4 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        Step4
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});