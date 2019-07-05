import firebase from './FirebaseApp'
import 'firebase/auth'

export const resetPassword = async (newPassword, oldPassword) => {
  if (firebase.auth().currentUser.providerData[0].providerId == 'password') {
    var email = firebase.auth().currentUser.email
    var credentials = firebase.auth.EmailAuthProvider.credential(email, oldPassword)

    firebase.auth().currentUser
      .reauthenticateAndRetrieveDataWithCredential(credentials)
      .then(user => {
        user.user.updatePassword(newPassword)
          .then(() => alert('Your password has been reset'))
      })
      .catch(err => alert(`Old password \n${err}`))

  }
  else {
    alert(`Your credentials don't need password`)
  }
}

export const deleteAccount = async () => {
  await firebase.auth().currentUser.delete()
}