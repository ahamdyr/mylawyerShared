import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {navigate, goBack} from '../../../Services/NavigationServices'
import VerifyTitle from '../../../Components/LawyerVerifyComp/VerifyStepTitle'
import SelectMajorBtn from '../../../Components/LawyerVerifyComp/SelectMajorBtn'
import ProgressBar from '../../../Components/LawyerVerifyComp/ProgressBar'
import NextBtn from '../../../Components/LawyerVerifyComp/NextBtn'

export default class Step1 extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <VerifyTitle
          title={'Verify Your Account'}
          subTitle={'Please provide us with your informations & papers to verify your account'}
          step={'Step 1: Major'}
        />
        <SelectMajorBtn
        // major={}
          onPress={()=>navigate('SelectMajor')}
        />
        <ProgressBar step={1} />
        <NextBtn
          onPress={()=>navigate('Step2')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b7f7c",
    alignItems: 'center',
    //justifyContent: 'center',
  },
});