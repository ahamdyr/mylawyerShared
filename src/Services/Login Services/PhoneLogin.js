import { base64Token } from '../Guid'
import { requestCodeApi, SignUpWithPhoneApi, LogInWithPhoneApi } from '../BackendServices/AccountServices'
import {
  saveUser,
  getUserType,
  getPhoneCredentials,
  savePhoneCredentials
} from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import * as WebBrowser from 'expo-web-browser'
import {
  PhoneAuth,
  confirmationResult,
  PhoneUpdate,
  isRegisteredUser
} from '../FirebaseServices/PhoneAuth'
import {
  updateUserName,
  updateUserPhoneNumber
} from '../FirebaseServices/UpdateUser'
import Store from '../../Redux/Store'
import firebase from '../FirebaseServices/FirebaseApp'
import 'firebase/auth'
import _ from 'lodash'

// const captchaUrl = `https://my-lawyer-dea44.web.app/?appurl=${Linking.makeUrl(
//   ''
// )}`

export const SignUpWithPhone = async (phone, confCode, userName) => {
  try {
    navigate('Spinner')
    
    var backendToken = base64Token(phone, confCode)
    
    var userType = getUserType()

    var currentUser = await SignUpWithPhoneApi(backendToken, userName)

    userType = currentUser.type

    await saveUser(currentUser, userType)

    showMessage({
      message: 'You logged in successfully',
      hideOnPress: true,
      duration: 3000,
      type: 'success'
    })
    navigate('UserApp')
  } catch (error) {
    goBack()
    showMessage({
      message: `${error}\nTry again!`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger'
    })
  }
}
export const SignInWithPhone = async (phone, confCode) => {
  try {
    navigate('Spinner')
    
    var backendToken = base64Token(phone, confCode)
    
    var userType = getUserType()

    var currentUser = await LogInWithPhoneApi(backendToken)

    userType = currentUser.type
    await saveUser(currentUser, userType)
    showMessage({
      message: 'You logged in successfully',
      hideOnPress: true,
      duration: 3000,
      type: 'success',
    });    
  } catch (error) {
    goBack()
    showMessage({
      message: `${error}\nTry again!`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger'
    })
  }
}
// export const SignUp = async (confCode, userName) => {
//   try {
//     navigate('Spinner')
//     var { currentUser, userToken, uid, refreshToken } = await PhoneAuth(
//       confCode
//     )

//     currentUser.displayName = userName
//     updateUserName(userName)

//     await savePhoneCredentials({
//       currentUser,
//       userToken,
//       uid,
//       refreshToken
//     })

//     var backendToken = base64Token(uid, userToken)

//     var userType = getUserType()

//     var pickedUser = await Register(userType, backendToken)

//     currentUser = Object.assign({}, currentUser, pickedUser)

//     await saveUser(currentUser, userType)

//     showMessage({
//       message: 'You logged in successfully',
//       hideOnPress: true,
//       duration: 3000,
//       type: 'success'
//     })
//     navigate('UserApp')
//   } catch (error) {
//     goBack()
//     showMessage({
//       message: `${error}\nTry again!`,
//       hideOnPress: true,
//       duration: 3000,
//       type: 'danger'
//     })
//   }
// }

export const Update = async confCode => {
  try {
    navigate('Spinner')
    var authCredential = await PhoneUpdate(confCode)
    await updateUserPhoneNumber(authCredential)
    navigate('SideMenu')
  } catch (error) {
    goBack()
    showMessage({
      message: `${error}\nTry again!`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger'
    })
  }
}

// export const SignIn = async phoneNumber => {
//   try {
//     navigate('Spinner')
//     var phoneCredentials = await isRegisteredUser(phoneNumber)

//     if (_.isEmpty(phoneCredentials)) {
//       showMessage({
//         message: `You are not registered with phone number\n try to register.`,
//         hideOnPress: true,
//         duration: 3000,
//         type: 'danger'
//       })
//       goBack()
//     } else {
//       var { currentUser, userToken, uid, refreshToken } = phoneCredentials

//       var backendToken = base64Token(uid, userToken)

//       var userType = getUserType()

//       var pickedUser = await Register(userType, backendToken)

//       currentUser = Object.assign({}, currentUser, pickedUser)

//       userType = currentUser.type

//       if (userType == 'lawyer') {
//         if (currentUser.isActivated) {
//           await saveUser(currentUser, userType)
//           showMessage({
//             message: 'You logged in successfully',
//             hideOnPress: true,
//             duration: 3000,
//             type: 'success'
//           })
//           //navigate('LawyerApp')
//         } else {
//           navigate('Step4')
//         }
//       } else {
//         showMessage({
//           message: 'You logged in successfully',
//           hideOnPress: true,
//           duration: 3000,
//           type: 'success'
//         })
//         await saveUser(currentUser, userType)
//         //navigate('UserApp')
//       }
//     }
//   } catch (error) {
//     goBack()
//     showMessage({
//       message: `${error} \nTry again`,
//       hideOnPress: true,
//       duration: 3000,
//       type: 'danger'
//     })
//   }
// }
export const requestCode = async (phoneNumber, countryCode) => {
  try {
    await requestCodeApi(phoneNumber, countryCode)
  } catch (error) {
    showMessage({
      message: `${error} \nTry again`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger'
    })
  }
}
// export const requestCode = async phoneNumber => {
//   try {
//     var token = null
//     const listener = ({ url }) => {
//       WebBrowser.dismissBrowser()
//       const tokenEncoded = Linking.parse(url).queryParams['token']
//       if (tokenEncoded) token = decodeURIComponent(tokenEncoded)
//     }
//     Linking.addEventListener('url', listener)
//     await WebBrowser.openBrowserAsync(captchaUrl)
//     Linking.removeEventListener('url', listener)
//     if (token) {
//       //fake firebase.auth.ApplicationVerifier
//       const captchaVerifier = {
//         type: 'recaptcha',
//         verify: () => Promise.resolve(token)
//       }
//       await confirmationResult(phoneNumber, captchaVerifier)
//     }
//   } catch (error) {
//     showMessage({
//       message: `${error} \nTry again`,
//       hideOnPress: true,
//       duration: 3000,
//       type: 'danger'
//     })
//   }
// }
