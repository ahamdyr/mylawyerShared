import Store from '../Redux/Store'
import {AsyncStorage} from 'react-native'


export var isLoggedUser = async() => await AsyncStorage.getItem('userToken')