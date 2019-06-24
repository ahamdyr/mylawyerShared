import { base64Token } from '../Guid'
import { Register, Login } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import { MailLogin, MailSignUp } from '../FirebaseServices/MailAuth'
import { updateUserName } from '../FirebaseServices/UpdateUser'
import Store from '../../Redux/Store'

export const SignUp = async () => {
  try {
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

    // let userType = getUserType()

    // let pickedUser = await Register(userType, backendToken)

    // currentUser = Object.assign(currentUser, pickedUser)

    await saveUser(currentUser, refreshToken)

    Alert.alert('LogIn', 'You logged in successfully')
    navigate('App')
  } catch (error) {
    alert(`${error} \nTry again`)
  }
}

export const SignIn = async () => {
  try {
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

    // let pickedUser = await Login(backendToken)

    // currentUser = Object.assign(currentUser, pickedUser)

    await saveUser(currentUser, refreshToken)

    Alert.alert('LogIn', 'You logged in successfully')
    navigate('App')
  } catch (error) {
    alert(`${error} \nTry again`)
  }
}