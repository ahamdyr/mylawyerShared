import firebase from './FirebaseApp'
import 'firebase/auth'

var confirmResult;
var verificationId;

export const confirmationResult = async (phoneNumber, captchaVerifier) => {
  try {
    confirmResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, captchaVerifier)
    verificationId = confirmResult.verificationId
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

export const PhoneUpdate = async (confCode) => {
  return firebase.auth.PhoneAuthProvider.credential(verificationId, confCode)
}

export const isRegisteredUser = async (phoneNumber) => {
    return fetch(
      'https://us-central1-my-lawyer-dea44.cloudfunctions.net/isRegisteredUser',
      {
        method: 'POST',
        body: JSON.stringify({
          phoneNumber
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(async res => {
      return res.json().then(async result => {
        var currentUser = {
          displayName: result.displayName,
          email: result.email,
          phoneNumber: result.phoneNumber,
          photoURL: result.photoURL
        }

        var user = firebase.auth().currentUser
        var uid = user.uid
        var userToken = await user.getIdToken(true)
        var refreshToken = user.refreshToken

        return {
          currentUser,
          userToken,
          uid,
          refreshToken
        }
      }).catch(err => console.log('err  ',err))
    })
    .catch(err => console.log('error ',err))  
}