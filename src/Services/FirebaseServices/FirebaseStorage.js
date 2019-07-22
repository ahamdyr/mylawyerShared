import firebase from './FirebaseApp'
import './FirebaseTimeout'

export const addToStorage = async (path, uri) => {

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

const addFileToFirebase = async (file, mainPath) => {
  return new Promise((resolve, reject) => {
    var path = `${mainPath}/${file.name}`
    addToStorage(path, file.uri)
      .then(link => {
        resolve(link)
      })
      .catch(err => reject(err))
  })
}

export const addFilesToFirebase = async (files, mainPath) => {

  let promisesList = []
  for (let file of files){
    promisesList.push(addFileToFirebase(file, mainPath))
  }
  return Promise.all(promisesList)
}