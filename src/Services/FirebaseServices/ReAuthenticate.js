import { base64Token } from '../Guid'
import { Register } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import firebase from './FirebaseApp'
import 'firebase/auth'


export const ReAuthenticate = async () => {

  try {
    firebase.auth()
      .onAuthStateChanged(async user => {
      //.onIdTokenChanged(async user => {
      if (user) {
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

        var backendToken = base64Token(uid, userToken)

        var userType = getUserType()

        var pickedUser = await Register(userType, backendToken)
        currentUser = Object.assign({}, currentUser, pickedUser)
        await saveUser(currentUser, userType)
      }
    })

  } catch (error) {
    showMessage({
      message: `${error}\nTry again!`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger',
    });
  }
}