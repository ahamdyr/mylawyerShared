import { base64Token } from '../Guid'
import { Register, Login } from '../BackendServices/AccountServices'
import { saveUser, getUserType, getPhoneCredentials, savePhoneCredentials } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import { Linking, WebBrowser } from 'expo'
import { PhoneAuth, confirmationResult, PhoneUpdate, isRegisteredUser } from '../FirebaseServices/PhoneAuth'
import { updateUserName, updateUserPhoneNumber } from '../FirebaseServices/UpdateUser'
import Store from '../../Redux/Store'
import firebase from '../FirebaseServices/FirebaseApp'
import 'firebase/auth'
import _ from 'lodash'

const captchaUrl = `https://my-lawyer-dea44.web.app/?appurl=${Linking.makeUrl('')}`

export const SignUp = async (confCode, userName) => {
  try {
    navigate('Spinner')
    var {
      currentUser,
      userToken,
      uid,
      refreshToken
    } = await PhoneAuth(confCode)
    
    
    currentUser.displayName = userName
    updateUserName(userName)
    
    await savePhoneCredentials({
      currentUser,
      userToken,
      uid,
      refreshToken
    })
    
    var backendToken = base64Token(uid, userToken)

    var userType = getUserType()

    var pickedUser = await Register(userType, backendToken)
    
    currentUser = Object.assign({},currentUser, pickedUser)

    await saveUser(currentUser, userType)
    
    Alert.alert('LogIn', 'You logged in successfully')
    navigate('UserApp')
  } catch (error) {
    goBack()
    alert(`${error} \nTry again`)
  }
}

export const Update = async (confCode) => {
  try {
    navigate('Spinner')
    var authCredential = await PhoneUpdate(confCode)
    await updateUserPhoneNumber(authCredential)
    navigate('SideMenu')
  } catch (error) {
    goBack()
    alert(`${error} \nTry again`)
  }
}

export const SignIn = async (phoneNumber) => {
  try {
    navigate('Spinner')
    var phoneCredentials = await isRegisteredUser(phoneNumber)
    
    if(_.isEmpty(phoneCredentials))
    {
      alert(`You are not registered with phone number\n try to register.`)
      goBack()
    }
    else {
      var {
        currentUser,
        userToken,
        uid,
        refreshToken
      } = phoneCredentials

      var backendToken = base64Token(uid, userToken)

      var userType = getUserType()

      var pickedUser = await Register(userType, backendToken)

      currentUser = Object.assign({}, currentUser, pickedUser)

      await saveUser(currentUser, userType)

      Alert.alert('LogIn', 'You logged in successfully')
      navigate('UserApp')
    }    
  } catch (error) {
    goBack()
    alert(`${error} \nTry again`)
  }
}

export const requestCode = async phoneNumber => {
  try {
    var token = null
    const listener = ({ url }) => {
      WebBrowser.dismissBrowser()
      const tokenEncoded = Linking.parse(url).queryParams['token']
      if (tokenEncoded)
        token = decodeURIComponent(tokenEncoded)
    }
    Linking.addEventListener('url', listener)
    await WebBrowser.openBrowserAsync(captchaUrl)
    Linking.removeEventListener('url', listener)
    if (token) {
      //fake firebase.auth.ApplicationVerifier
      const captchaVerifier = {
        type: 'recaptcha',
        verify: () => Promise.resolve(token)
      }
      await confirmationResult(phoneNumber, captchaVerifier)
    }
  } catch (error) {
    alert(`${error} \nTry again`)
  }
}