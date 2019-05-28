import Store from '../Redux/Store'
import { AsyncStorage } from 'react-native'
import {
  setLoggedUser,
  setCurrentUser,
  setAccessToken
} from '../Redux/Auth/actions'

export const saveUser = async (currentUser, refreshToken) => {
  try {
    let accessToken = currentUser.accessToken
    Store.dispatch(setCurrentUser(currentUser))
    Store.dispatch(setAccessToken(accessToken))
    Store.dispatch(setLoggedUser(true))
    await AsyncStorage.setItem('accessToken', JSON.stringify(accessToken)) 
    await AsyncStorage.setItem('refreshToken', JSON.stringify(refreshToken))      
    await AsyncStorage.setItem('currentUser', JSON.stringify(currentUser))
      
  } catch (error) {
    console.log(error)
  }
}