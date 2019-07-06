import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import { WIDTH } from '../Constants'
import Ask from '../BottomTabIcons/Ask Icon'
import { camera, attachment } from '../../../assets'
import ImageIcon from '../Common/ImageIcon'
import { navigate, goBack } from '../../Services/NavigationServices'
import { uploadFile, uploadCameraImage, uploadGalleryImage } from '../../Services/FilesServices'
import _ from 'lodash'
import { addToStorage } from '../../Services/FirebaseServices/FirebaseStorage'
import { guidGenerator } from '../../Services/Guid'
export default class Footer extends React.PureComponent {

  _onAttachPress = () => {
    Platform.OS == 'ios' ? 
      Alert.alert('Select type', '', [
        { text: 'Image', onPress: () => this._uploadGalleryImage(), style: 'default' },
        { text: 'File', onPress: () => this._uploadFile(), style: 'default' },
        {
          text: 'Cancel',
          //onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ], { cancelable: true })
      : this._uploadFile()
  }
  _uploadFile = async () => {
    let doc = await uploadFile()
    //console.log(doc)
    //await addToStorage(`test/${guidGenerator()}`, doc)
    doc ? this.props.setQuestionDoc(doc) : null
  }
  _uploadCameraImage = async () => {
    let img = await uploadCameraImage()
    //console.log(img)
    //await addToStorage(`test/${guidGenerator()}`, img)
    img ? this.props.setQuestionImg(img) : null
  }
  _uploadGalleryImage = async () => {
    let img = await uploadGalleryImage()
    //console.log(img)
    //await addToStorage(`test/${guidGenerator()}`, img)
    img ? this.props.setQuestionImg(img) : null
  }
  _submit = () => {    
    if (this.props.isLoggedUser) {      
      if (this.props.questionTitle && this.props.questionBody && this.props.questionTopic !== '0') {
        this.props.submitQuestion()    
      }
      else {
        alert('Your query must have at least topic, title and body')
      }
    }
    else {
      navigate('SocialScreen')
    }
  }

  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={this._uploadCameraImage}
          style={styles.cameratIconContainer}>
          <ImageIcon
            style={styles.cameratIcon}
            source={camera}
          />
        </TouchableOpacity>
        <Ask
          text={'Send'}
          onPress={this._submit}
        />
        <TouchableOpacity
          onPress={this._onAttachPress}
          style={styles.cameratIconContainer}>
          <ImageIcon
            style={styles.attachmentIcon}
            source={attachment}
          />
        </TouchableOpacity>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  footer: {
    // position: 'absolute',
    // bottom: 0,
    alignSelf: 'flex-end',
    height: 55,
    width: WIDTH,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 12,
    shadowColor: "#00000014",
    shadowOffset: {
      width: 0,
      height: -16
    },
    shadowRadius: 24,
    shadowOpacity: 1
  },
  attachmentIcon: {
    width: 21,
    height: 21,
    //color: MAIN_COLOR,
    //marginTop: 10
  },
  cameratIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',    
    width: 50,
    height: 50,
    //backgroundColor: 'red'
  },
  cameratIcon: {
    width: 22,
    height: 20,
    //color: MAIN_COLOR,
    //marginTop: 20
  }
})