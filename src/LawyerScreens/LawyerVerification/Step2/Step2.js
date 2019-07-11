import React from 'react';
import { StyleSheet, Alert, View, SafeAreaView } from 'react-native';
import { navigate, goBack } from '../../../Services/NavigationServices'
import VerifyTitle from '../../../Components/LawyerVerifyComp/VerifyStepTitle'
import ProgressBar from '../../../Components/LawyerVerifyComp/ProgressBar'
import NextBtn from '../../../Components/LawyerVerifyComp/NextBtn'
import BackBtn from '../../../Components/LawyerVerifyComp/BackBtn'
import UploadBtn from '../../../Components/LawyerVerifyComp/UploadBtn'
import CaptureBtn from '../../../Components/LawyerVerifyComp/CaptureBtn'
import Attachs from '../../../Components/LawyerVerifyComp/Attachs'
import { 
  uploadCameraImage, uploadFile, uploadGalleryImage 
} from '../../../Services/FilesServices'

export default class Step2 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
    }
  }
  _onNext = () => {
    if (this.props.lawyerIDs.length == 0) {
      showMessage({
        message: 'You must add Lawyer ID',
        hideOnPress: true,
        autoHide: false,
        type: 'danger',
      });
    }
    else {
      navigate('Step3')
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
    img ? this.props.addLawyerID(img) : null
  }
  _uploadCameraImage = async () => {
    let img = await uploadCameraImage()
    img ? this.props.addLawyerID(img) : null
  }
  _uploadGalleryImage = async () => {
    let img = await uploadGalleryImage()
    img ? this.props.addLawyerID(img) : null
  }
  render() {
    var {
      lawyerIDs,
      deleteLawyerID
    } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <VerifyTitle
          title={'Verify Your Account'}
          subTitle={'Please provide us with your informations & papers to verify your account'}
          step={'Step 2: Lawyer ID'}
        />

        {
          lawyerIDs.length ?
            <Attachs
              data={lawyerIDs}
              delete={(lawyerID)=>deleteLawyerID(lawyerID)}
            />
            : null
        }

        <View
          //style={firmID.length ? {marginTop: 0} : {marginTop: 119}}
          style={{ marginBottom: 100 }}
        >
          <UploadBtn
            btnTitle={'Upload ID photo'}
            onPress={() => this._onAttachPress()}
          />
          <CaptureBtn
            btnTitle={'Capture ID photo'}
            onPress={() => this._uploadCameraImage()}
          />
        </View>


        <ProgressBar step={2} />
        <BackBtn
          onPress={() => goBack()}
        />
        <NextBtn
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