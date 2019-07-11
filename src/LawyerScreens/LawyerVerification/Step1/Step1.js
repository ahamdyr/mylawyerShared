import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {navigate, goBack} from '../../../Services/NavigationServices'
import VerifyTitle from '../../../Components/LawyerVerifyComp/VerifyStepTitle'
import SelectMajorBtn from '../../../Components/LawyerVerifyComp/SelectMajorBtn'
import ProgressBar from '../../../Components/LawyerVerifyComp/ProgressBar'
import NextBtn from '../../../Components/LawyerVerifyComp/NextBtn'
import _ from 'lodash'
export default class Step1 extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
    }
  }
  _initialMajor = {
    id: 0,
    name: 'Select your major…'
  }
  _onNext = () => {
    if(this.btnRef.props.major.id == 0){
      showMessage({
        message: 'You must select major',
        hideOnPress: true,
        autoHide: false,
        type: 'danger',
      });
    }
    else{
      navigate('Step2')
    }
  }
  render() {
    //console.log('this.state.major  ',this.props.lawyerMajor)
    return (
      <SafeAreaView style={styles.container}>
        <VerifyTitle
          title={'Verify Your Account'}
          subTitle={'Please provide us with your informations & papers to verify your account'}
          step={'Step 1: Major'}
        />
        <SelectMajorBtn
          ref={ref => this.btnRef = ref}
          major={ _.isEmpty(this.props.lawyerMajor) ? this._initialMajor : this.props.lawyerMajor }
          onPress={()=>navigate('SelectMajor')}
        />
        <ProgressBar step={1} />
        <NextBtn
          onPress={this._onNext}
        />
      </SafeAreaView>
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