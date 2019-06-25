import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spinner from '../Spinner'
import LawsList from '../../Components/Lawyers List/LawsList';

export default class LawyersScreen extends React.Component {

  componentDidMount(){
    this.props.getLawyersRequest()
  }

  render() {
    if(this.props.getLawyersLoading){
      return (<Spinner/>)
    }
    return (
      <View style={styles.container}>
        <LawsList lawyers={this.props.getLawyersSuccess}/>
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