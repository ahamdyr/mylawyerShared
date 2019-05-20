import firebase from './FirebaseApp'
import 'firebase/auth'
import {goBack, navigate} from '../NavigationServices'
import { AsyncStorage } from "react-native"
import Store from '../../Redux/Store'
import {setLoggedUser} from '../../Redux/Auth/actions'

export const LoginWithMailAndPassword = async()=>{

  const email = Store.getState().userMail
  const password =Store.getState().userPassword

  navigate('Spinner')
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async userCredential => {
      let userToken = await  userCredential.user.getIdToken()
        //console.log(userToken)
          AsyncStorage.setItem('userToken',userToken)
          .then(()=>{
            Store.dispatch(setLoggedUser(true))
            navigate('App')
          })
        
    })
    .catch(err => {
      console.log(err)
      alert(err)
      navigate('App')
    })
}