import { Facebook } from 'expo'
import { goBack, navigate } from '../NavigationServices'
import { AsyncStorage } from "react-native"
import Store from '../../Redux/Store'
import { 
  setLoggedUser,
  setCurrentUser   
} from '../../Redux/Auth/actions'
import { AuthFacebook } from '../FirebaseServices/FacebookAuth'


const FACEBOOK_APP_ID = "397884547607821"
const FACEBOOK_APP_SECRET = "192cab05f1eb403b690ca981db3a1974"

const iOSBundleID = 'host.exp.Exponent'
const Androidkeyhash = 'rRW++LUjmZZ+58EbN5DVhGAnkX4='

export const LoginWithFacebook = async () => {
  //navigate('Spinner')
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FACEBOOK_APP_ID,
      {
        permissions: ['public_profile', 'email'],
        behavior: 'native'
      }
    )

    if (type === 'success') {

      const {
        currentUser,
        userToken
      } = await AuthFacebook(token)

      // register back end

      AsyncStorage.setItem('userToken', userToken)
        .then(() => {
          AsyncStorage.setItem('currentUser', currentUser)
            .then(()=>{
              Store.dispatch(setCurrentUser(currentUser))
              Store.dispatch(setLoggedUser(true))
              navigate('App')
            })         
        })
    }
    else {
      alert('Login Failed \nTry again')
      navigate('App')
    }
  } catch (error) {
    alert(`${error} \nTry again`)
    navigate('App')
  }
}