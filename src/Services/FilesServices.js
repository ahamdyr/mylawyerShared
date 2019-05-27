import { guidGenerator } from './Guid'
import {DocumentPicker, ImagePicker, Permissions} from 'expo'

export const uploadFile = async () => {
  let doc = await DocumentPicker.getDocumentAsync()
  if (doc.type == 'success') {
    doc.uuid = guidGenerator()
    doc.type = 'doc'
    //console.log('doc', doc)
    return doc
  }
  else{
    return 0
  }
}

export const uploadImage = async () => {
  await Permissions.askAsync(Permissions.CAMERA);
  await Permissions.askAsync(Permissions.CAMERA_ROLL);

  let doc = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
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