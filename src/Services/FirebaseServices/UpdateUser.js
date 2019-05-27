import firebase from './FirebaseApp'
import 'firebase/auth'

export const updateUserName = async (userName) => {
  await firebase.auth().currentUser.updateProfile({
    displayName: userName
  })
}

export const updateUserPhoto = async (userPhoto) => {
  await firebase.auth().currentUser.updateProfile({
    photoURL: userPhoto
  })
}