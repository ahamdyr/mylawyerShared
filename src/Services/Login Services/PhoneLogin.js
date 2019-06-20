import { base64Token } from '../Guid'
import { Register, Login } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import { Linking, WebBrowser } from 'expo'
import { PhoneAuth, confirmationResult } from '../FirebaseServices/PhoneAuth'
import { updateUserName } from '../FirebaseServices/UpdateUser'
import Store from '../../Redux/Store'

const captchaUrl = `https://my-lawyer-dea44.web.app/?appurl=${Linking.makeUrl('')}`

export const SignUp = async (confCode, userName) => {
  navigate('Spinner')
  const {
    currentUser,
    userToken,
    uid,
    refreshToken
  } = await PhoneAuth(confCode)

  // console.log('1')
  currentUser.displayName = userName
  updateUserName(userName)
  // console.log('2')
  // let backendToken = base64Token(uid, userToken)

  // let userType = getUserType()

  // let pickedUser = await Register(userType, backendToken)
  // // console.log('3')
  // currentUser = Object.assign({},currentUser, pickedUser)

  await saveUser(currentUser, refreshToken)
  // console.log('4')
  Alert.alert('LogIn', 'You logged in successfully')
  navigate('App')
}

export const SignIn = async (confCode) => {
  navigate('Spinner')
  const {
    currentUser,
    userToken,
    uid,
    refreshToken
  } = await PhoneAuth(confCode)

  // let backendToken = base64Token(uid, userToken)

  // let pickedUser = await Login(backendToken)

  // currentUser = Object.assign(currentUser, pickedUser)

  await saveUser(currentUser, refreshToken)

  Alert.alert('LogIn', 'You logged in successfully')
  navigate('App')
}

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