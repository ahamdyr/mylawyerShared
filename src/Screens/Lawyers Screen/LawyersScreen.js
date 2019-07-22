import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Spinner from '../Spinner'
import LawsList from '../../Components/Lawyers List/LawsList';
import { mockLawyersList } from "../../Services/BackendServices/MockData"
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
        <SafeAreaView style={styles.container}>
          <Text style={{
            fontSize: 16,
            color: '#0b7f7c'
          }}>
            No Lawyers Found!
          </Text>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <LawsList lawyers={this.props.getLawyersSuccess}/>
        {/* <LawsList lawyers={mockLawyersList}/> */}
      </SafeAreaView>
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