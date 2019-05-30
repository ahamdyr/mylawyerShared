import Store from '../Redux/Store'
import { AsyncStorage } from 'react-native'
import {
  setLoggedUser,
  setCurrentUser,
  setAccessToken
} from '../Redux/Auth/actions'

export const saveUser = async (currentUser, refreshToken) => {
  try {
    Store.dispatch(setCurrentUser(currentUser))
    Store.dispatch(setLoggedUser(true))     
    await AsyncStorage.setItem('currentUser', JSON.stringify(currentUser))
    await AsyncStorage.setItem('refreshToken', JSON.stringify(refreshToken))
    let accessToken = currentUser.accessToken
    Store.dispatch(setAccessToken(accessToken))
    await AsyncStorage.setItem('accessToken', JSON.stringify(accessToken))  
      
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async () => {
  let currentUserJson = await AsyncStorage.getItem('currentUser')
  if(currentUserJson !== null){    
    let currentUser = JSON.parse(currentUserJson)  
    Store.dispatch(setCurrentUser(currentUser))
    Store.dispatch(setLoggedUser(true))
    let accessToken = currentUser.accessToken
    Store.dispatch(setAccessToken(accessToken))
  }
}

export const getUserType = () => Store.getState().userType