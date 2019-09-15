import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Spinner from '../Spinner'
import LawsList from '../../Components/Lawyers List/LawsList';
import { mockLawyersList } from "../../Services/BackendServices/MockData"

export default class LawyersScreen extends React.Component {

  _major = this.props.navigation.getParam('major')

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={styles.title}>
          {navigation.getParam('major').name}
        </Text>          
      ),
      headerRight: null,
    }
  }
  componentDidMount(){
    this.props.getLawyersRequest(this._major.id)
  }
  componentWillUnmount(){
    this.props.getLawyersSuccess([])
  }

  render() {
    if(this.props.getLawyersLoading){
      return (<Spinner/>)
    }
    if(!this.props.lawyers.length){
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
        <LawsList lawyers={this.props.lawyers}/>
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
  title: {
    fontFamily: "Cairo-Black",
    fontSize: 20,
    letterSpacing: 0,
    textAlign: "right",
    color: "#131314"
  },
});