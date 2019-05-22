import Store from '../Redux/Store'
import { AsyncStorage } from 'react-native'
import {
  setLoggedUser,
  setCurrentUser
} from '../Redux/Auth/actions'

export const saveUser = async (userToken, currentUser) => {
  Store.dispatch(setCurrentUser(currentUser))
  Store.dispatch(setLoggedUser(true))
  AsyncStorage.setItem('userToken', userToken)
    .then(()=>{})
    .catch(async err=>{
      await AsyncStorage.removeItem('userToken')
      await AsyncStorage.setItem('userToken', userToken)
    })
  AsyncStorage.setItem('currentUser', currentUser)
    .then(()=>{})
    .catch(async err=>{
      await AsyncStorage.removeItem('currentUser')
      await AsyncStorage.setItem('currentUser', currentUser)
    })
}