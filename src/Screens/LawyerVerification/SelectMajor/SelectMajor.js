import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navigate, goBack } from '../../../Services/NavigationServices'
import MajorsList from '../../../Components/LawyerVerifyComp/MajorsList'
export default class SelectMajor extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: null,
      //headerTintColor: 'white',
      //headerBackTitleVisible : true
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Select your major…
          </Text>
        <MajorsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b7f7c",
    //alignItems: 'center',
    //justifyContent: 'space-between',
    paddingBottom: 20
  },
  title: {
    marginTop: 10,
    marginLeft: 15,
    fontFamily: "Lato-Regular",
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff"
  }
});