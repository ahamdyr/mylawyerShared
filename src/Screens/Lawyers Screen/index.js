import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LawsList from '../../Components/Lawyers List/LawsList';

export default class LawyersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LawsList/>
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