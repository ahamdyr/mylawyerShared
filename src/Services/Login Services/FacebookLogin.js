import * as Facebook from 'expo-facebook'
import { FacebookAuth } from '../FirebaseServices/FacebookAuth'
import { base64Token } from '../Guid'
import { Register, Login } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import axios from 'axios'

const FACEBOOK_APP_ID = '397884547607821'
const FACEBOOK_APP_SECRET = '192cab05f1eb403b690ca981db3a1974'
const iOSBundleID = 'host.exp.Exponent'
const Androidkeyhash = 'rRW++LUjmZZ+58EbN5DVhGAnkX4='

// firebase auth
export const LoginWithFacebook = async () => {
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FACEBOOK_APP_ID,
      {
        permissions: ['public_profile', 'email'],
        behavior: 'native'
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
      } = await FacebookAuth(token)

      var backendToken = base64Token(uid, userToken)

      var userType = getUserType()
      
      var pickedUser = await Register(userType, backendToken)

      currentUser = Object.assign({}, currentUser, pickedUser)

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
        message: 'Login Failed \nTry again',
        hideOnPress: true,
        duration: 3000,
        type: 'danger'
      })
      navigate('UserApp')
    }
  } catch (error) {
    showMessage({
      message: `${error} \nTry again`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger'
    })
    navigate('UserApp')
  }
}

// // backend auth
// export const LoginWithFacebook = async () => {
//   try {
//     const { type, token } = await Facebook.logInWithReadPermissionsAsync(
//       FACEBOOK_APP_ID,
//       {
//         permissions: ['public_profile', 'email'],
//         behavior: 'native'
//       }
//     )

//     if (type === 'success') {
//       navigate('Spinner')

//       var userType = getUserType()

//       var  fbUser = await axios.get(`https://graph.facebook.com/me?access_token=${token}`);

//       var uid = fbUser.data.id

//       var backendToken = base64Token(uid, token)

//       var currentUser  = await Register(userType, backendToken, `Facebook`)
//       console.log('currentUser ',currentUser)
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
//     } else {
//       showMessage({
//         message: 'Login Failed \nTry again',
//         hideOnPress: true,
//         duration: 3000,
//         type: 'danger'
//       })
//       navigate('UserApp')
//     }
//   } catch (error) {
//     showMessage({
//       message: `${error} \nTry again`,
//       hideOnPress: true,
//       duration: 3000,
//       type: 'danger'
//     })
//     navigate('UserApp')
//   }
// }