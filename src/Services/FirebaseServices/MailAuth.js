import firebase from './FirebaseApp'
import 'firebase/auth'


export const MailLogin = async(email, password)=>{

  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async userCredential => {
      var user = userCredential.user
      var currentUser = (({
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
      var userToken = await user.getIdToken(true)
      var uid = user.uid
      var refreshToken = user.refreshToken
      return {
        currentUser,
        userToken,
        uid,
        refreshToken
      }
    })
    .catch(err => {
      alert(`User isn't registered \n try to register`)
    })
}

export const MailSignUp = async (email, password) => {

  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async userCredential => {
      var user = userCredential.user
      var currentUser = {
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL
      }
      var userToken = await user.getIdToken(true)
      var uid = user.uid
      var refreshToken = user.refreshToken
      return {
        currentUser,
        userToken,
        uid,
        refreshToken
      }
    })
    .catch(err => {
      return (`User has already registered \n try to logIn`)
    })
}