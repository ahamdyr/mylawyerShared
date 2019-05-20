import { Linking, WebBrowser } from 'expo'
import firebase from './FirebaseApp'
import 'firebase/auth'
import {goBack, navigate} from '../NavigationServices'
import { AsyncStorage } from "react-native"

const captchaUrl = `https://my-lawyer-dea44.web.app/?appurl=${Linking.makeUrl('')}`

var confirmResult;


export const sendVerificationCode = async phoneNumber => {
  let token = null
  const listener = ({ url }) => {
    WebBrowser.dismissBrowser()
    const tokenEncoded = Linking.parse(url).queryParams['token']
    if (tokenEncoded)
      token = decodeURIComponent(tokenEncoded)
  }
  Linking.addEventListener('url', listener)
  await WebBrowser.openBrowserAsync(captchaUrl)
  Linking.removeEventListener('url', listener)
  if (token) {
    //fake firebase.auth.ApplicationVerifier
    const captchaVerifier = {
      type: 'recaptcha',
      verify: () => Promise.resolve(token)
    }
    try {
      firebase.auth().signInWithPhoneNumber(phoneNumber, captchaVerifier)
        .then(res => {
          confirmResult = res
        })
        .catch(err => console.log(err))


    } catch (e) {
      console.log(e)      
    }

  }
}

export const confirmVerificationCode = async confCode => {
  navigate('Spinner')
  confirmResult.confirm(confCode)
    .then( async userCredential =>{      
      let userToken = await  userCredential.user.getIdToken()
      await AsyncStorage.setItem('userToken', userToken)
      // navigate to spinner 
      //Authrize  with backend with credential
      // navigate to app
      navigate('App')
    })
    .catch(err=>{
      console.log(err)
    })
}