import { Google } from 'expo'
import { GoogleAuth } from '../FirebaseServices/GoogleAuth'
import { base64Token } from '../Guid'
import { Register, Login } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'

const iOSClientId = "357729817077-pc4lpp2oramc13sopec41m5fbmdgk5ib.apps.googleusercontent.com"
const androidClientId = "357729817077-m8729cqlpeuq7ovf0skaqvmehgaa4t5n.apps.googleusercontent.com"
//const androidStandAlone = "357729817077-9cdl1mk3mkr3r204o3d216pj9onor1m7.apps.googleusercontent.com"
//const iOSStandAlone = "357729817077-j8codho5u6os0c5qf12iq968g3jh4tl9.apps.googleusercontent.com"

export const LoginWithGoogle = async () => {
  try {
    const { type, accessToken } = await Google.logInAsync(
      {
        // behavior: 'web',
        //androidStandaloneAppClientId: androidStandAlone,
        androidClientId: androidClientId,
        //iosStandaloneAppClientId: iOSStandAlone,
        iosClientId: iOSClientId,
        scopes: ['profile', 'email']
      }
    )

    if (type === 'success') {
      navigate('Spinner')
      var {
        currentUser,
        userToken,
        uid,
        refreshToken,
        isNewUser
      } = await GoogleAuth(accessToken)

      var backendToken = base64Token(uid, userToken)

      var userType = getUserType()
      var pickedUser = await Register(userType, backendToken)

      currentUser = Object.assign({},currentUser, pickedUser)

      await saveUser(currentUser, refreshToken)

      Alert.alert('LogIn', 'You logged in successfully')
      goBack()
      goBack()
    }
    else {
      alert('Login Cancelled \nTry again')
      goBack()
      goBack()
    }
  } catch (error) {
    alert(`${error.message} \nTry again`)
    goBack()
    goBack()
  }
}