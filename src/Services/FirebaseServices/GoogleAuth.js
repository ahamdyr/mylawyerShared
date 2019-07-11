import firebase from './FirebaseApp'

export const GoogleAuth = async (token) => {
  try {
    const credential = firebase.auth.GoogleAuthProvider.credential(null, token)
    return firebase
      .auth()
      .signInAndRetrieveDataWithCredential(credential)
      .then(async userCredential => {  
        let user = userCredential.user       
        let isNewUser = userCredential.additionalUserInfo.isNewUser 
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
          refreshToken,
          isNewUser
        }
      })
      .catch(err => {
        showMessage({
          message: `${err}\nTry again!`,
          hideOnPress: true,
          autoHide: false,
          type: 'danger',
        });
      })
  } catch (error) {
    showMessage({
      message: `${error}\nTry again!`,
      hideOnPress: true,
      autoHide: false,
      type: 'danger',
    });
  }
}