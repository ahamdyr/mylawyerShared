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
          .then(() => showMessage({
            message: 'You are logged out',
            hideOnPress: true,
            duration: 3000,
            type: 'success',
          }))
      })
      .catch(err => showMessage({
        message: `Old password \n${err}`,
        hideOnPress: true,
        duration: 3000,
        type: 'danger',
      }))

  }
  else {
    showMessage({
      message: `Your credentials don't need password`,
      hideOnPress: true,
      duration: 3000,
      type: 'danger',
    });
  }
}

export const deleteAccount = async () => {
  await firebase.auth().currentUser.delete()
}