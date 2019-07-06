import { guidGenerator } from './Guid'
import {DocumentPicker, ImagePicker, Permissions} from 'expo'
import { Platform } from 'react-native'

export const uploadFile = async () => {

  let doc = await DocumentPicker.getDocumentAsync()
  if (doc.type == 'success') {
    doc.uuid = guidGenerator()
    doc.type = 'document'
    //console.log('doc', doc)
    return doc
  }
  else {
    return 0
  }
}

export const uploadGalleryImage = async () => {
  let photosPerm = await Permissions.askAsync(Permissions.CAMERA_ROLL);

  if (photosPerm.status == "denied") {
    alert('Enable Permissions in your App Settings')
    return 0
  }
  let img = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    //aspect: [4, 3],
    base64: false,
  })

  if (!img.cancelled) {
    img.uuid = guidGenerator()
    //console.log('doc', doc)
    return img
  }
  else {
    return 0
  }
}
export const uploadCameraImage = async () => {  
  let camPerm = await Permissions.askAsync(Permissions.CAMERA);
  
  if(camPerm.status == "denied"){
    alert('Enable Permissions in your App Settings')
    return 0
  }

  let doc = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    //aspect: [4, 3],
    base64: false,
  })
  if (!doc.cancelled) {
    doc.uuid = guidGenerator()
    //console.log('doc', doc)
    return doc
  }
  else{
    return 0
  }
}