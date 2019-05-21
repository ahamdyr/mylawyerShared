import firebase from './FirebaseApp'

export const GoogleAuth = async (token) => {
  try {
    const credential = firebase.auth.GoogleAuthProvider.credential(null, token)
    return firebase
      .auth()
      .signInAndRetrieveDataWithCredential(credential)
      .then(async userCredential => {
        let currentUser = userCredential.user.providerData[0]
        let userToken = await userCredential.user.getIdToken(true)

        return {
          currentUser,
          userToken
        }
      })
      .catch(err=>{
        alert(err)
      })
  } catch (error) {
    alert(error)
  }
}