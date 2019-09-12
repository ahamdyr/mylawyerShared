import Store from '../Redux/Store'
import { AsyncStorage } from 'react-native'
import {
  setLoggedUser,
  setCurrentUser,
  setAccessToken,
  setPhoneNumber,
  setUserType,
  setPhoneAuthCredentials
} from '../Redux/Auth/actions'
import { ReAuthenticate } from './FirebaseServices/ReAuthenticate'
import {
    navigate,
    goBack
} from './NavigationServices'

export const saveUser = async (currentUser, userType) => {
  try {
    //console.log('currentUser ', currentUser)
    Store.dispatch(setLoggedUser(true))     
    Store.dispatch(setCurrentUser(currentUser))
    let accessToken = currentUser.accessToken
    Store.dispatch(setAccessToken(accessToken))
    userType == 'lawyer' ? navigate('LawyerApp') : navigate('UserApp')
    AsyncStorage.setItem('currentUser', JSON.stringify(currentUser))
    AsyncStorage.setItem('userType', JSON.stringify(userType))
    //await AsyncStorage.setItem('accessToken', JSON.stringify(accessToken))  
      
  } catch (error) {
    navigate('UserApp')
    showMessage({
      message: `${error}\nTry again!`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger',
    });
  }
}

export const updateUserProfile = async (newData) => {
  var currentUser = Store.getState().currentUser
  Object.keys(newData).forEach(key => {
    if (newData[key]) {
      currentUser[key] = newData[key]
    }
  })
  Store.dispatch(setCurrentUser(currentUser))
  AsyncStorage.setItem('currentUser', JSON.stringify(currentUser), err => {
    if (err) alert(err)
  })
}

export const updateUserPhoneNumber = async (phoneNumber) => {
  //navigate('Spinner')
  Store.dispatch(setPhoneNumber(phoneNumber))
  //navigate('PhoneVerification',{action: 'update'})
  //goBack()
}

export const logOut = async () => {
  try {
    //console.log('currentUser ', currentUser)
    Store.dispatch(setUserType('user'))
    Store.dispatch(setCurrentUser({}))
    Store.dispatch(setLoggedUser(false))     
    Store.dispatch(setAccessToken(''))
    await AsyncStorage.removeItem('currentUser')
    await AsyncStorage.removeItem('userType')
    //await AsyncStorage.removeItem('accessToken') 
    //Store.dispatch(getUserOwnQuestionsSuccess([]))
    showMessage({
      message: 'You are logged out',
      hideOnPress: true,
      duration: 3000,
      type: 'success',
    });
      
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async () => {
  let userTypeJson = await AsyncStorage.getItem('userType')
  if(userTypeJson !== null){   
    var userType =JSON.parse(userTypeJson)
    if(userType == 'lawyer'){
      Store.dispatch(setUserType(userType))
      //navigate('LawyerApp')
    }
    await ReAuthenticate()
    // let currentUserJson = await AsyncStorage.getItem('currentUser')
    // let currentUser = JSON.parse(currentUserJson)     
    // Store.dispatch(setCurrentUser(currentUser))
    // Store.dispatch(setLoggedUser(true))
    // let accessToken = currentUser.accessToken
    // Store.dispatch(setAccessToken(accessToken))
  }
  else navigate('UserApp')
}

export const getUserType = () => Store.getState().userType

export const savePhoneCredentials = async (phoneCredentials) => {
  Store.dispatch(setPhoneAuthCredentials(phoneCredentials))
  AsyncStorage.setItem('phoneCredentials', JSON.stringify(phoneCredentials))
}

export const setPhoneCredentials = async () => {
  let phoneCredentialsJson = await AsyncStorage.getItem('phoneCredentials')
  if(phoneCredentialsJson !== null){    
    let phoneCredentials = JSON.parse(phoneCredentialsJson)  
    Store.dispatch(setPhoneAuthCredentials(phoneCredentials))
  }
} 

export const getPhoneCredentials = () => Store.getState().phoneCredentials