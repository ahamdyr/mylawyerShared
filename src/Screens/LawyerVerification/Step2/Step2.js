import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {navigate, goBack} from '../../../Services/NavigationServices'
import VerifyTitle from '../../../Components/LawyerVerifyComp/VerifyStepTitle'
import SelectMajorBtn from '../../../Components/LawyerVerifyComp/SelectMajorBtn'
import ProgressBar from '../../../Components/LawyerVerifyComp/ProgressBar'
import NextBtn from '../../../Components/LawyerVerifyComp/NextBtn'
import BackBtn from '../../../Components/LawyerVerifyComp/BackBtn'
import UploadBtn from '../../../Components/LawyerVerifyComp/UploadBtn'
import CaptureBtn from '../../../Components/LawyerVerifyComp/CaptureBtn'
import Attachs from '../../../Components/LawyerVerifyComp/Attachs'

export default class Step2 extends React.Component {
  render() {
    const {
      //firmID
    } = this.props
    return (
      <View style={styles.container}>
        <VerifyTitle
          title={'Verify Your Account'}
          subTitle={'Please provide us with your informations & papers to verify your account'}
          step={'Step 2: Lawyer ID'}
        />

        {<Attachs />}
        
        <View
          //style={firmID.length ? {marginTop: 0} : {marginTop: 119}}
          style={{marginBottom: 100}}
        >
          <UploadBtn
            btnTitle={'Upload ID photo'}
          //onPress={}
          />
          <CaptureBtn
            btnTitle={'Capture ID photo'}
          //onPress={}
          />
        </View>

       
          <ProgressBar step={2} />
          <BackBtn
            onPress={() => goBack()}
          />
          <NextBtn
            onPress={() => navigate('Step3')}
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
    justifyContent: 'space-between',
  },
});