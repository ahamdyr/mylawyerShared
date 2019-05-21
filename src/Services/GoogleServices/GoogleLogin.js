import { Google } from 'expo'
import { goBack, navigate } from '../NavigationServices'
import { AsyncStorage } from "react-native"
import Store from '../../Redux/Store'
import { 
  setLoggedUser,
  setCurrentUser   
} from '../../Redux/Auth/actions'
import { GoogleAuth } from '../FirebaseServices/GoogleAuth'


const iOSClientId = "357729817077-uurcodove6tkqg566209vs3n637i8sjd.apps.googleusercontent.com" 
const androidClientId = "357729817077-ltefo5uju0rui7slu0l5mncpuulrj358.apps.googleusercontent.com"
const webClientId = "357729817077-ltefo5uju0rui7slu0l5mncpuulrj358.apps.googleusercontent.com"

export const LoginWithGoogle = async()=>{  
  try {
    navigate('Spinner')

    const { type,  user, accessToken } = await Google.logInAsync(
      {
        // behavior: 'web',
        clientId: iOSClientId,
        scopes: ['profile', 'email']
      }
    )

    if (type === 'success') {

      console.log(user);
      // const {
      //   currentUser,
      //   userToken
      // } = await GoogleAuth(token)

      // // register back end

      // AsyncStorage.setItem('userToken', userToken)
      //   .then(() => {
      //     AsyncStorage.setItem('currentUser', currentUser)
      //       .then(()=>{
      //         Store.dispatch(setCurrentUser(currentUser))
      //         Store.dispatch(setLoggedUser(true))
      //         navigate('App')
      //       })         
      //   })
    }
    else {
      alert('Login Cancelled \nTry again')
      navigate('App')
    }
  } catch (error) {
    alert(`${error.message} \nTry again`)
    navigate('App')
  }
}