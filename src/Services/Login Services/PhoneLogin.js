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

  // signUp with phone
  const userName = Store.getState().userName
  if (userName) {
    currentUser.displayName = userName
    updateUserName(userName)
  }

  // let backendToken = base64Token(uid, userToken)

  // let pickedUser =  await Register('user',backendToken) 

  // currentUser = Object.assign(currentUser, pickedUser)

  //await saveUser(currentUser, refreshToken)

  Alert.alert('LogIn', 'You logged in successfully')
  navigate('App')
}