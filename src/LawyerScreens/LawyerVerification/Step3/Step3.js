import React from 'react';
import { StyleSheet, Alert, View, SafeAreaView } from 'react-native';
import { navigate, goBack } from '../../../Services/NavigationServices'
import VerifyTitle from '../../../Components/LawyerVerifyComp/VerifyStepTitle'
import ProgressBar from '../../../Components/LawyerVerifyComp/ProgressBar'
import VerifyBtn from '../../../Components/LawyerVerifyComp/VerifyBtn'
import BackBtn from '../../../Components/LawyerVerifyComp/BackBtn'
import UploadBtn from '../../../Components/LawyerVerifyComp/UploadBtn'
import CaptureBtn from '../../../Components/LawyerVerifyComp/CaptureBtn'
import Attachs from '../../../Components/LawyerVerifyComp/Attachs'
import {
  uploadCameraImage, uploadFile, uploadGalleryImage
} from '../../../Services/FilesServices'
import { lawyerSignUp } from '../../../Services/Login Services/MailLogin'

export default class Step3 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
    }
  }
  _onNext = () => {
    if (this.props.firmPapers.length == 0) {
      showMessage({
        message: 'You must add Firm Papers',
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      });
    }
    else {
      lawyerSignUp()
    }
  }
  _onAttachPress = () => {
    // Platform.OS == 'ios' ? 
    Alert.alert('Select type', '', [
      { text: 'Image', onPress: () => this._uploadGalleryImage(), style: 'default' },
      { text: 'File', onPress: () => this._uploadFile(), style: 'default' },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ], { cancelable: true })
    // : this._uploadFile()
  }
  _uploadFile = async () => {
    let img = await uploadFile()
    img ? this.props.addFirmPaper(img) : null
  }
  _uploadCameraImage = async () => {
    let img = await uploadCameraImage()
    img ? this.props.addFirmPaper(img) : null
  }
  _uploadGalleryImage = async () => {
    let img = await uploadGalleryImage()
    img ? this.props.addFirmPaper(img) : null
  }
  render() {
    var {
      firmPapers,
      deleteFirmPaper
    } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <VerifyTitle
          title={'Verify Your Account'}
          subTitle={'Please provide us with your informations & papers to verify your account'}
          step={'Step 3: Firm papers'}
        />
        {
          firmPapers.length ?
            <Attachs
              data={firmPapers}
              delete={(firmPaper) => deleteFirmPaper(firmPaper)}
            />
            : null
        }
        <View
          //style={firmID.length ? {marginTop: 0} : {marginTop: 119}}
          style={{ marginBottom: 100 }}
        >
          <UploadBtn
            btnTitle={'Upload firm papers'}
            onPress={() => this._onAttachPress()}
          />
          <CaptureBtn
            btnTitle={'Capture firm papers'}
            onPress={() => this._uploadCameraImage()}
          />
        </View>


        <ProgressBar step={3} />
        <BackBtn
          onPress={() => goBack()}
        />
        <VerifyBtn
          btnTitle={'Verify'}
          onPress={() => this._onNext()}
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
    justifyContent: 'space-between',
  },
});