import firebase from './FirebaseApp'

export const FacebookAuth = async (token) => {
  const credential = firebase.auth.FacebookAuthProvider.credential(token)
  return firebase
    .auth()
    .signInAndRetrieveDataWithCredential(credential)
    .then(async userCredential => {
      let user = userCredential.user
      let currentUser = (({
        displayName,
        email,
        phoneNumber,
        photoURL
      }) => ({
        displayName,
        email,
        phoneNumber,
        photoURL
      }))(user)
      let userToken = await user.getIdToken(true)
      let uid = user.uid
      let refreshToken = user.refreshToken
      return {
        currentUser,
        userToken,
        uid,
        refreshToken
      }
    })
    .catch(err => {
      alert(err)
    })
}