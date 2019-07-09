import Store from '../Redux/Store'
import { AsyncStorage } from 'react-native'
import {
  setLoggedUser,
  setCurrentUser,
  setAccessToken,
  setPhoneNumber,
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
    Store.dispatch(setCurrentUser(currentUser))
    Store.dispatch(setLoggedUser(true))     
    await AsyncStorage.setItem('currentUser', JSON.stringify(currentUser))
    await AsyncStorage.setItem('userType', JSON.stringify(userType))
    let accessToken = currentUser.accessToken
    Store.dispatch(setAccessToken(accessToken))
    await AsyncStorage.setItem('accessToken', JSON.stringify(accessToken))  
      
  } catch (error) {
    console.log(error)
  }
}

export const updateUserProfile = async (newData) => {
  try {
    Store.dispatch(setCurrentUser(newData))
    await AsyncStorage.setItem('currentUser', JSON.stringify(newData))
  } catch (error) {
    console.log(error)
  }
}

export const updateUserPhoneNumber = async (phoneNumber) => {
  //navigate('Spinner')
  Store.dispatch(setPhoneNumber(phoneNumber))
  navigate('PhoneVerification',{action: 'update'})
  //goBack()
}

export const logOut = async () => {
  try {
    //console.log('currentUser ', currentUser)
    Store.dispatch(setCurrentUser({}))
    Store.dispatch(setLoggedUser(false))     
    await AsyncStorage.removeItem('currentUser')
    await AsyncStorage.removeItem('userType')
    Store.dispatch(setAccessToken(''))
    await AsyncStorage.removeItem('accessToken') 
    //Store.dispatch(getUserOwnQuestionsSuccess([]))
    alert('You are logged out!')     
      
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async () => {
  //let currentUserJson = await AsyncStorage.getItem('currentUser')
  let userTypeJson = await AsyncStorage.getItem('userType')
  if(userTypeJson !== null){   
    var userType =JSON.parse(userTypeJson)
    console.log('userType  ',userType)
    if(userType == 'lawyer'){
      navigate('LawyerApp')
    }
    await ReAuthenticate()
    //let currentUser = JSON.parse(currentUserJson)     
    // Store.dispatch(setCurrentUser(currentUser))
    // Store.dispatch(setLoggedUser(true))
    // let accessToken = currentUser.accessToken
    // Store.dispatch(setAccessToken(accessToken))
  }
}

export const getUserType = () => Store.getState().userType

export const savePhoneCredentials = async (phoneCredentials) => {
  Store.dispatch(setPhoneAuthCredentials(phoneCredentials))
  await AsyncStorage.setItem('phoneCredentials', JSON.stringify(phoneCredentials))
}

export const setPhoneCredentials = async () => {
  let phoneCredentialsJson = await AsyncStorage.getItem('phoneCredentials')
  if(phoneCredentialsJson !== null){    
    let phoneCredentials = JSON.parse(phoneCredentialsJson)  
    Store.dispatch(setPhoneAuthCredentials(phoneCredentials))
  }
} 

export const getPhoneCredentials = () => Store.getState().phoneCredentials