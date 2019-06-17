import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {navigate, goBack} from '../../../Services/NavigationServices'
import VerifyTitle from '../../../Components/LawyerVerifyComp/VerifyStepTitle'
import SelectMajorBtn from '../../../Components/LawyerVerifyComp/SelectMajorBtn'
import ProgressBar from '../../../Components/LawyerVerifyComp/ProgressBar'
import VerifyBtn from '../../../Components/LawyerVerifyComp/VerifyBtn'
import BackBtn from '../../../Components/LawyerVerifyComp/BackBtn'
import UploadBtn from '../../../Components/LawyerVerifyComp/UploadBtn'
import CaptureBtn from '../../../Components/LawyerVerifyComp/CaptureBtn'
import Attachs from '../../../Components/LawyerVerifyComp/Attachs'

export default class Step3 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
    }
  }
  render() {
    const {
      //firmID
    } = this.props
    return (
      <View style={styles.container}>
        <VerifyTitle
          title={'Verify Your Account'}
          subTitle={'Please provide us with your informations & papers to verify your account'}
          step={'Step 3: Firm papers'}
        />

        {<Attachs />}
        
        <View
          //style={firmID.length ? {marginTop: 0} : {marginTop: 119}}
          style={{marginBottom: 100}}
        >
          <UploadBtn
            btnTitle={'Upload firm papers'}
          //onPress={}
          />
          <CaptureBtn
            btnTitle={'Capture firm papers'}
          //onPress={}
          />
        </View>

       
          <ProgressBar step={3} />
          <BackBtn
            onPress={() => goBack()}
          />
          <VerifyBtn
            btnTitle={'Verify'}
            onPress={() => navigate('Step4')}
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