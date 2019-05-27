import Store from '../Redux/Store'
import { AsyncStorage } from 'react-native'
import {
  setLoggedUser,
  setCurrentUser
} from '../Redux/Auth/actions'

export const saveUser = async (userToken, currentUser, refreshToken) => {
  try {
    Store.dispatch(setCurrentUser(currentUser))
    Store.dispatch(setLoggedUser(true))
    await AsyncStorage.setItem('userToken', JSON.stringify(userToken)) 
    await AsyncStorage.setItem('refreshToken', JSON.stringify(refreshToken))      
    await AsyncStorage.setItem('currentUser', JSON.stringify(currentUser))
      
  } catch (error) {
    console.log(error)
  }
}