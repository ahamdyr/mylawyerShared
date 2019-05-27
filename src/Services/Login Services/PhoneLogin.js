import { base64Token } from '../Guid'
import { Register } from '../BackendServices/AccountServices'
import { saveUser } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import { Linking, WebBrowser } from 'expo'
import { PhoneAuth, confirmationResult } from '../FirebaseServices/PhoneAuth'
import { updateUserName } from '../FirebaseServices/UpdateUser'
import Store from '../../Redux/Store'

const captchaUrl = `https://my-lawyer-dea44.web.app/?appurl=${Linking.makeUrl('')}`

export const requestCode = async phoneNumber => {
  let token = null
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
}

export const confirmCode = async (confCode) => {
  navigate('Spinner')
  const {
    currentUser,
    userToken,
    uid,
    refreshToken
  } = await PhoneAuth(confCode)
  const userName = Store.getState().userName
  if (userName) {
    currentUser.displayName = userName
    updateUserName(userName)
  }
  let backendToken = base64Token(uid, userToken)
  // console.log('uid : ',uid)
  // console.log('token : ',backendToken)
  //await Register('user',backendToken)
  //await saveUser()

  Alert.alert('LogIn', 'You logged in successfully')
  navigate('App')
}

const checkUserName = (currentUser) => {
  const userName = Store.getState().userName
  if (userName) {
    currentUser.displayName = userName
    updateUserName(userName)
    return currentUser
  }
} 