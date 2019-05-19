import {Linking, WebBrowser} from 'expo'
import firebase from '../firebase'
import 'firebase/auth'

const captchaUrl = `https://my-lawyer-dea44.web.app/?appurl=${Linking.makeUrl('')}`
export const sendVerificationCode = async phoneNumber =>
{
  let token = null
  const listener = ({url}) => {
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
        return firebase.auth().signInWithPhoneNumber(phoneNumber, captchaVerifier)
                    .then(res=>{
                      return res
                    })
                    .catch(err=>console.log(err))

           
      } catch (e) {
          console.log(e)
          return Promise.reject(e)
      }

  }
}