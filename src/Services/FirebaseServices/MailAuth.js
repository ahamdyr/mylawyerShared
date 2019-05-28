import firebase from './FirebaseApp'
import 'firebase/auth'


export const MailLogin = async(email, password)=>{

  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
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

export const MailSignUp = async (email, password) => {

  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
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