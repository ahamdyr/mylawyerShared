import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { STATUS_BAR_HEIGHT, WIDTH, HEIGHT , MAIN_COLOR} from '../Constants'
import { DocumentPicker, ImagePicker, Permissions } from 'expo'
import Ask from '../BottomTabIcons/Ask Icon'
import { SimpleLineIcons } from '@expo/vector-icons';
import {camera, attachment} from '../../../assets'
import ImageIcon from '../Common/ImageIcon'
import Store from '../../Redux/Store'
import {setQFiles, setQImages, submitQ} from '../../Redux/AddQuestion/actions'

export default class Footer extends React.PureComponent {
  _uploadFile = async () =>{
    
    let doc = await DocumentPicker.getDocumentAsync()
    // doc.name = '+201007121821.jpg'
    Store.dispatch(setQFiles(doc))
     console.log('doc',doc)
  }
  _uploadImage = async () =>{
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
      let doc = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: false,
      })
      Store.dispatch(setQImages(doc))
      console.log('doc',doc)
    
     
  }
  _submit = ()=>{
    Store.dispatch(submitQ())
    alert('Your question has been submitted')
  }
  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity 
          onPress={this._uploadImage}
          style={styles.cameratIconContainer}>
        {/* <SimpleLineIcons
          name={'camera'}
          style={styles.cameratIcon}
        />     */}
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
          onPress={this._uploadFile}
          style={styles.attachmentIcon}>
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
    position: 'absolute',
    bottom: 0,
    height: 55,
    width: WIDTH,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 12,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: -8,
      width: 0
    },
  },
  attachmentIcon:{
    width: 21,
    height: 21,
    //color: MAIN_COLOR,
    //marginTop: 10
  },
  cameratIconContainer:{
    width: 22,
    height: 20,
  },
  cameratIcon:{
    width: 22,
    height: 20,
    //color: MAIN_COLOR,
    //marginTop: 20
  }
})