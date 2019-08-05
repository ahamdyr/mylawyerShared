import firebase from './FirebaseApp'
import 'firebase/auth'
import { addToStorage } from './FirebaseStorage'
import{
  goBack,
  navigate
} from '../NavigationServices'

export const updateUserName = async (userName) => {
  await firebase.auth().currentUser.updateProfile({
    displayName: userName
  })
}

export const updateUserEmail = async (email) => {
  await firebase.auth().currentUser.updateEmail(email)
}

export const updateUserPhoneNumber = async (phoneNumberCredential) => {
  await firebase.auth().currentUser.updatePhoneNumber(phoneNumberCredential)
}

export const updateUserPhoto = async (userPhoto) => {  
  navigate('Spinner')
  var path = `${firebase.auth().currentUser.uid}/userImage.png`
  var photoURL = await addToStorage(path, userPhoto)
  firebase.auth().currentUser.updateProfile({
    photoURL: photoURL
  })
  goBack()
  return photoURL
}