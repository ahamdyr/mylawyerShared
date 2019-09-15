import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Spinner from '../Spinner'
import MajorsList from '../../Components/MajorsList/MajorsList';
import { mockLawyersList } from "../../Services/BackendServices/MockData"
export default class MajorsScreen extends React.Component {

  componentDidMount(){
    this.props.getMajorsRequest()
  }
  componentWillUnmount(){
    //this.props.getLawyersSuccess([])
  }

  render() {
    if(this.props.getMajorsLoading){
      return (<Spinner/>)
    }
    if(!this.props.getMajorsSuccess.length){
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
        <MajorsList majors={this.props.getMajorsSuccess}/>
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