import { base64Token } from '../Guid'
import { Register } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import firebase from './FirebaseApp'
import 'firebase/auth'
import { navigate } from '../NavigationServices'
import { registerExpoPushToken } from '../ExpoNotifications'

export const ReAuthenticate = async () => {
  firebase.auth().onAuthStateChanged(async user => {
    //.onIdTokenChanged(async user => {
    if (user) {
      var currentUser = (({ displayName, email, phoneNumber, photoURL }) => ({
        displayName,
        email,
        phoneNumber,
        photoURL
      }))(user)
      try {
        var userToken = await user.getIdToken(true)
        var uid = user.uid
        var refreshToken = user.refreshToken

        var backendToken = base64Token(uid, userToken)

        var userType = getUserType()

        var pickedUser = await Register(userType, backendToken)

        currentUser = Object.assign({}, currentUser, pickedUser)

        userType = currentUser.type

        if (userType == 'lawyer') {
          if (currentUser.isActivated) {
            await saveUser(currentUser, userType)
          } else {
            navigate('Step4')
          }
        } else {
          await saveUser(currentUser, userType)
        }

        registerExpoPushToken()
      } catch (error) {
        navigate('UserApp')
        showMessage({
          message: `${error}\nTry again!`,
          hideOnPress: true,
          duration: 3000,
          type: 'danger'
        })
      }
    } else {
      navigate('UserApp')
    }
  })
}
