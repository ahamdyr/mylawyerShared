import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class UserProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>UserProfile!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});