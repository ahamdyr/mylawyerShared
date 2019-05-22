import firebase from './FirebaseApp'

export const FacebookAuth = async (token) => {
  const credential = firebase.auth.FacebookAuthProvider.credential(token)
  return firebase
    .auth()
    .signInAndRetrieveDataWithCredential(credential)
    .then(async userCredential=>{
      let currentUser = userCredential.user.providerData[0]
      let userToken = await userCredential.user.getIdToken(true)

      return {
        currentUser,
        userToken
      }
    })    
}