import firebase from './FirebaseApp'
import './FirebaseTimeout'

export const addToStorage = async (path, file) => {

  const uri = file.uri

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
  
  const ref = firebase
    .storage()
    .ref()
    .child(path);
    
  const snapshot = await ref.put(blob);
  const remoteUri = await snapshot.ref.getDownloadURL();

  //console.log('remoteUri  ',remoteUri)
  // when we're done sending it, close and release the blob
  blob.close();

  // return the result, eg. remote URI to the image
  return remoteUri;
}