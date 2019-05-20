import firebase from './FirebaseApp'
import 'firebase/auth'
import { goBack, navigate } from '../NavigationServices'
import { AsyncStorage } from "react-native"
import Store from '../../Redux/Store'
import { setLoggedUser } from '../../Redux/Auth/actions'


export const SignUpWithMailAndPassword = async () => {
  const email = Store.getState().userMail
  const password = Store.getState().userPassword
  navigate('Spinner')

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async userCredential => {
      //firebase.auth().currentUser.sendEmailVerification()
      let userToken = await  userCredential.user.getIdToken()
        
          AsyncStorage.setItem('userToken', userToken)
            .then(() => {
              Store.dispatch(setLoggedUser(true))
              navigate('App')
            })
            .catch(err => {
              console.log(err)
              alert(err)
              navigate('App')
            })
        
    })
    .catch(err => {
      console.log(err)
      alert(err)
      navigate('App')
    })
}