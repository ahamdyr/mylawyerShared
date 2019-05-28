import { base64Token } from '../Guid'
import { Register } from '../BackendServices/AccountServices'
import { saveUser } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import { MailLogin, MailSignUp } from '../FirebaseServices/MailAuth'
import { updateUserName } from '../FirebaseServices/UpdateUser'
import Store from '../../Redux/Store'

export const SignUp = async () => {
  const email = Store.getState().userMail
  const password = Store.getState().userPassword
  const userName = Store.getState().userName
  navigate('Spinner')
  const {
    currentUser,
    userToken,
    uid,
    refreshToken
  } = await MailSignUp(email, password)

  // add userName
  currentUser.displayName = userName
  updateUserName(userName)
  // let backendToken = base64Token(uid, userToken)

  // let pickedUser =  await Register('user',backendToken) 

  // currentUser = Object.assign(currentUser, pickedUser)

  //await saveUser(currentUser, refreshToken)

  Alert.alert('LogIn', 'You logged in successfully')
  navigate('App')
}

export const Login = async () => {
  const email = Store.getState().userMail
  const password = Store.getState().userPassword

  navigate('Spinner')
  const {
    currentUser,
    userToken,
    uid,
    refreshToken
  } = await MailLogin(email, password)
  
  // let backendToken = base64Token(uid, userToken)

  // let pickedUser =  await Register('user',backendToken) 

  // currentUser = Object.assign(currentUser, pickedUser)

  //await saveUser(currentUser, refreshToken)

  Alert.alert('LogIn', 'You logged in successfully')
  navigate('App')
}