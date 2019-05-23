import { Google } from 'expo'
import { goBack, navigate } from '../NavigationServices'
import {saveUser} from '../AuthServices'

import { GoogleAuth } from '../FirebaseServices/GoogleAuth'


const iOSClientId = "com.googleusercontent.apps.357729817077-pc4lpp2oramc13sopec41m5fbmdgk5ib"
const androidClientId = "357729817077-m8729cqlpeuq7ovf0skaqvmehgaa4t5n.apps.googleusercontent.com"
const androidStandAlone = "357729817077-9cdl1mk3mkr3r204o3d216pj9onor1m7.apps.googleusercontent.com"
const iOSStandAlone = "com.googleusercontent.apps.357729817077-j8codho5u6os0c5qf12iq968g3jh4tl9"

export const LoginWithGoogle = async () => {
  try {
    navigate('Spinner')

    const { type, accessToken } = await Google.logInAsync(
      {
        // behavior: 'web',
        androidClientId: androidClientId,
        iosStandaloneAppClientId: iOSStandAlone,
        iosClientId: iOSClientId,
        androidStandaloneAppClientId: androidStandAlone,
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