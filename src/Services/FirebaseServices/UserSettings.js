import firebase from './FirebaseApp'
import 'firebase/auth'

export const resetPassword = async (newPassword) => {
  if(firebase.auth().currentUser.providerData[0].providerId == 'password'){
    await firebase.auth().currentUser.updatePassword(newPassword)
    alert('Your password has been reset')
  }
  else{
    alert(`Your credentials don't need password`)
  }
}

export const deleteAccount = async () => {
  await firebase.auth().currentUser.delete()
}