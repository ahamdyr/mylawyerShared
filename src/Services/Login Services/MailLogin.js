import { base64Token } from '../Guid'
import { Register, LawyerRegister } from '../BackendServices/AccountServices'
import { saveUser, getUserType } from '../AuthServices'
import { Alert } from 'react-native'
import { goBack, navigate } from '../NavigationServices'
import { MailLogin, MailSignUp } from '../FirebaseServices/MailAuth'
import { updateUserName } from '../FirebaseServices/UpdateUser'
import { addFilesToFirebase } from '../FirebaseServices/FirebaseStorage'
import Store from '../../Redux/Store'

export const SignUp = async () => {
  var userType = getUserType()
  if (userType == 'user') {
    await userSignUp()
  }
  else {
    navigate('LawyerAuth')
  }
}

export const SignIn = async () => {
  try {
    const email = Store.getState().userMail
    const password = Store.getState().userPassword

    navigate('Spinner')
    var {
      currentUser,
      userToken,
      uid,
      refreshToken
    } = await MailLogin(email, password)

    var backendToken = base64Token(uid, userToken)

    var userType = getUserType()

    var pickedUser = await Register(userType, backendToken)

    currentUser = Object.assign({}, currentUser, pickedUser)

    if (userType == 'lawyer') {
      if (currentUser.isActivated) {
        await saveUser(currentUser, userType)
        Alert.alert('LogIn', 'You logged in successfully')
        navigate('LawyerApp')
      }
      else {
        navigate('Step4')
      }
    }
    else {
      await saveUser(currentUser, userType)
      Alert.alert('LogIn', 'You logged in successfully')
      navigate('UserApp')
    }
  } catch (error) {
    Alert.alert('Error', `You are not registered\nRegister first...`)
    goBack()
  }
}

const userSignUp = async () => {
  try {
    const email = Store.getState().userMail
    const password = Store.getState().userPassword
    const userName = Store.getState().userName
    navigate('Spinner')
    var {
      currentUser,
      userToken,
      uid,
      refreshToken
    } = await MailSignUp(email, password)

    // add userName
    currentUser.displayName = userName
    updateUserName(userName)

    var backendToken = base64Token(uid, userToken)

    var userType = getUserType()

    var pickedUser = await Register(userType, backendToken)

    currentUser = Object.assign({}, currentUser, pickedUser)

    await saveUser(currentUser, userType)

    Alert.alert('Sign up', 'You have registered successfully')
    navigate('UserApp')
  } catch (error) {
    Alert.alert('Error', `You are already registered\n Try to log in`)
    goBack()
  }
}
export const lawyerSignUp = async () => {
  try {
    const email = Store.getState().userMail
    const password = Store.getState().userPassword
    const userName = Store.getState().userName
    navigate('Spinner')
    var {
      currentUser,
      userToken,
      uid,
      refreshToken
    } = await MailSignUp(email, password)

    // add userName
    currentUser.displayName = userName
    updateUserName(userName)

    var backendToken = base64Token(uid, userToken)

    var userType = getUserType()

    var lawyerMajor = Store.getState().lawyerMajor
    var lawyerIDs = Store.getState().lawyerIDs
    var firmPapers = Store.getState().firmPapers

    var lawyerIDsLinks = await addFilesToFirebase(lawyerIDs, `Lawyers/${uid}/lawyerIDs`)
    var firmPapersLinks = await addFilesToFirebase(firmPapers, `Lawyers/${uid}/firmPapers`)

    // console.log('lawyerIDsLinks ', lawyerIDsLinks)
    // console.log('firmPapersLinks ', firmPapersLinks)
    // console.log('lawyerMajor ', lawyerMajor)

    var pickedUser = await LawyerRegister(userType, backendToken, lawyerMajor, lawyerIDsLinks, firmPapersLinks)
    // var pickedUser = {
    //   id: 53,
    //   type: 'lawyer',
    //   accessToken: 'NTc6SW1SallqWm1ZakUwTFRnME0yRXRORE5rWVMwNVlXRmtMVEkwTVRjNVpUWmlaREpoWXlJOjFobFk4UzpWc3JuOGE5bVJTbm1Uck5fRU1LVkpwb3QxTzA=',
    //   isActivated: true
    // }
    currentUser = Object.assign({},currentUser, pickedUser)

    if (currentUser.isActivated) {
      await saveUser(currentUser, userType)
      Alert.alert('LogIn', 'You logged in successfully')
      navigate('LawyerApp')
    }
    else {
      navigate('Step4')
    }
  } catch (error) {
    Alert.alert('Error', `${error}`)
    goBack()
  }
}