import { base64Token } from '../Guid'
import { Register, Login } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import { Linking, WebBrowser } from 'expo'
import { PhoneAuth, confirmationResult, PhoneUpdate } from '../FirebaseServices/PhoneAuth'
import { updateUserName, updateUserPhoneNumber } from '../FirebaseServices/UpdateUser'
import Store from '../../Redux/Store'

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
    
    var backendToken = base64Token(uid, userToken)

    var userType = getUserType()

    var pickedUser = await Register(userType, backendToken)
    
    currentUser = Object.assign({},currentUser, pickedUser)

    await saveUser(currentUser, refreshToken)
    
    Alert.alert('LogIn', 'You logged in successfully')
    navigate('App')
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

export const SignIn = async (confCode) => {
  try {
    navigate('Spinner')
    var {
      currentUser,
      userToken,
      uid,
      refreshToken
    } = await PhoneAuth(confCode)

    var backendToken = base64Token(uid, userToken)

    var userType = getUserType()

    var pickedUser = await Register(userType, backendToken)
    
    currentUser = Object.assign({},currentUser, pickedUser)

    await saveUser(currentUser, refreshToken)

    Alert.alert('LogIn', 'You logged in successfully')
    navigate('App')
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