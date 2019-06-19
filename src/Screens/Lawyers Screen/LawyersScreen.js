import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LawsList from '../../Components/Lawyers List/LawsList';

export default class LawyersScreen extends React.Component {

  componentDidMount(){
    this.props.getLawyersRequest()
  }

  render() {
    var lawyersList = this.props.getLawyersSuccess
    return (
      <View style={styles.container}>
        <LawsList lawyers={lawyersList}/>
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