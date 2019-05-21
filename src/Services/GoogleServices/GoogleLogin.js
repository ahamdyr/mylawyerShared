import { Google } from 'expo'
import { goBack, navigate } from '../NavigationServices'
import {saveUser} from '../AuthServices'

import { GoogleAuth } from '../FirebaseServices/GoogleAuth'


const iOSClientId = "357729817077-pc4lpp2oramc13sopec41m5fbmdgk5ib.apps.googleusercontent.com"
const androidClientId = "357729817077-m8729cqlpeuq7ovf0skaqvmehgaa4t5n.apps.googleusercontent.com"
const webClientId = "357729817077-ltefo5uju0rui7slu0l5mncpuulrj358.apps.googleusercontent.com"

export const LoginWithGoogle = async () => {
  try {
    navigate('Spinner')

    const { type, accessToken } = await Google.logInAsync(
      {
        // behavior: 'web',
        androidClientId: androidClientId,
        iosClientId: iOSClientId,
        scopes: ['profile', 'email']
      }
    )

    if (type === 'success') {


      const {
        currentUser,
        userToken
      } = await GoogleAuth(accessToken)

      // register back end
      saveUser(userToken, currentUser)
      
      navigate('App')

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