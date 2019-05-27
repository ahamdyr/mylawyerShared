import firebase from './FirebaseApp'
import 'firebase/auth'

var confirmResult;

export const confirmationResult = async (phoneNumber, captchaVerifier) => {
  try {
    confirmResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, captchaVerifier)
  } catch (e) {
    alert(e)
  }
}

export const PhoneAuth = async (confCode) => {
  return confirmResult
    .confirm(confCode)
    .then(async userCredential => {
      let user = userCredential.user
      let currentUser = (({
        displayName,
        email,
        phoneNumber,
        photoURL
      }) => ({
        displayName,
        email,
        phoneNumber,
        photoURL
      }))(user)
      let userToken = await user.getIdToken(true)
      let uid = user.uid
      let refreshToken = user.refreshToken
      return {
        currentUser,
        userToken,
        uid,
        refreshToken
      }
    })
    .catch(err => {
      alert(err)
    })
}