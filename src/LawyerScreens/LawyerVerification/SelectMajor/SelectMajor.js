import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { navigate, goBack } from '../../../Services/NavigationServices'
import MajorsList from '../../../Components/LawyerVerifyComp/MajorsList'
import ImageIcon from '../../../Components/Common/ImageIcon'
import { BackArrow } from '../../../../assets'

export default class SelectMajor extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: null,
      //headerLeft: <ImageIcon source={BackArrow} style={styles.back} />,    
      //headerTintColor: 'white',
      //headerBackTitleVisible : true
    }
  }
  componentDidMount() {
    this.props.getMajorsRequest()
  }
  render() {
    var {
      getMajorsSuccess,
      getMajorsLoading
    } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Select your major…
          </Text>
        <MajorsList 
          majors={getMajorsSuccess}
          majorsLoading={getMajorsLoading}
        />
      </SafeAreaView>
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
  },
  back: {
    width: 18,
    height: 24,
    marginLeft: 12
  },
});