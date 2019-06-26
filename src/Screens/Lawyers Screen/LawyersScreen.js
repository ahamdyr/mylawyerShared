import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spinner from '../Spinner'
import LawsList from '../../Components/Lawyers List/LawsList';

export default class LawyersScreen extends React.Component {

  componentDidMount(){
    this.props.getLawyersRequest()
  }
  componentWillUnmount(){
    //this.props.getLawyersSuccess([])
  }

  render() {
    if(this.props.getLawyersLoading){
      return (<Spinner/>)
    }
    if(!this.props.getLawyersSuccess.length){
      return (
        <View style={styles.container}>
          <Text style={{
            fontSize: 16,
            color: '#0b7f7c'
          }}>
            No Lawyers Found!
          </Text>
        </View>
      );
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