import * as Google from 'expo-google-app-auth'
import * as AppAuth from 'expo-app-auth'
import { GoogleAuth } from '../FirebaseServices/GoogleAuth'
import { base64Token } from '../Guid'
import { Register, Login } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import { Platform } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import { Linking } from 'expo'

const iOSClientId =
  '357729817077-pc4lpp2oramc13sopec41m5fbmdgk5ib.apps.googleusercontent.com'
const androidClientId =
  '357729817077-m8729cqlpeuq7ovf0skaqvmehgaa4t5n.apps.googleusercontent.com'
const androidStandAlone =
  '357729817077-mp5l84a8itg794fls46bgltdg3pr6bai.apps.googleusercontent.com'
const iOSStandAlone =
  '357729817077-j8codho5u6os0c5qf12iq968g3jh4tl9.apps.googleusercontent.com'
var redirectUrl = `${AppAuth.OAuthRedirect}:/oauth2redirect/google`

export const LoginWithGoogle = async () => {
  try {
    const { type, accessToken, user } = await Google.logInAsync({
      androidStandaloneAppClientId: androidStandAlone,
      androidClientId: androidClientId,
      iosStandaloneAppClientId: iOSStandAlone,
      iosClientId: iOSClientId,
      scopes: ['profile', 'email'],
      redirectUrl: redirectUrl
    })

    if (type === 'success') {
      navigate('Spinner')
      // var {
      //   currentUser,
      //   userToken,
      //   uid,
      //   refreshToken,
      //   isNewUser
      // } = await GoogleAuth(accessToken)

      // var backendToken = base64Token(uid, userToken)

      var userType = getUserType()

      var backendToken = base64Token(user.id, accessToken)

      var currentUser = await Register(userType, backendToken, `Google`)
      // console.log('currentUser ',currentUser)
      // currentUser = Object.assign({}, currentUser, pickedUser)

      userType = currentUser.type

      if (userType == 'lawyer') {
        if (currentUser.isActivated) {
          await saveUser(currentUser, userType)
          showMessage({
            message: 'You logged in successfully',
            hideOnPress: true,
            duration: 3000,
            type: 'success'
          })
          //navigate('LawyerApp')
        } else {
          navigate('Step4')
        }
      } else {
        showMessage({
          message: 'You logged in successfully',
          hideOnPress: true,
          duration: 3000,
          type: 'success'
        })
        await saveUser(currentUser, userType)
        //navigate('UserApp')
      }
    } else {
      showMessage({
        message: 'Login Cancelled \nTry again',
        hideOnPress: true,
        duration: 3000,
        type: 'danger'
      })
      navigate('UserApp')
    }
  } catch (error) {
    showMessage({
      message: `${error.message} \nTry again`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger'
    })
    navigate('UserApp')
  }
}
