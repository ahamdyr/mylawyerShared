import axios from 'axios'

export const Register = async (type, token, provider, userPhoneNumber) => {
  let requestBody = new FormData()
  requestBody.append('type', type)
  //requestBody.append('phoneNumber', userPhoneNumber)
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}account/authenticate/`,{
      method: 'POST',
      body: JSON.stringify({
        type
      }),
      headers: {
        'Authorization': provider ? `${provider} ${token}` :`Firebase ${token}`
      }
    }).then(res => {
      res.json().then(data => {
        if(data.data){
          resolve(data.data)
        }
        else{
          reject(data.error.message)
        }
      })
    }).catch(err => reject(err))
  })  
}
export const LoginWithMail = async (token) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}account/authenticate/`,{
      method: 'POST',
      headers: {
        'Authorization': `Basic ${token}`
      }
    }).then(res => {
      res.json().then(data => {
        if(data.data){
          resolve(data.data)
        }
        else{
          reject(data.error.message)
        }
      })
    }).catch(err => reject(err))
  })  
}
export const SignUpWithMail = async (token, name, phone) => {
  let requestBody = `name=${name}&phone=${phone}`
  return new Promise((resolve, reject) => {
    axios.post(
      `account/authenticate/`,
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          "Authorization": `Basic ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        resolve(res.data.data) 
      }
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}
export const LawyerSwitchApi = async (token, lawyerMajor, lawyerIDsLinks, firmPapersLinks, userPhoneNumber) => {
  var requestBody = `type=lawyer`
  requestBody+= `&majors=${lawyerMajor.id}`
  lawyerIDsLinks.forEach(e=>{
    requestBody+= `&idPapers=${e}`
  })
  firmPapersLinks.forEach(x=>{
    requestBody+= `&firmPapers=${x}`
  })
  if(userPhoneNumber){
    requestBody+= `&phone=${userPhoneNumber}`
  }
  return new Promise((resolve, reject) => {
    axios.put(
      `account/`,
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        resolve(res.data.data) 
      }
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
export const LawyerRegister = async (type, token, lawyerMajor, lawyerIDsLinks, firmPapersLinks, userPhoneNumber) => {
  
  let requestBody = new FormData()
  requestBody.append('type', type)
  requestBody.append('majors', lawyerMajor.id)
  lawyerIDsLinks.forEach(e=>{
    requestBody.append('idPapers', e)
  })
  firmPapersLinks.forEach(x=>{
    requestBody.append('firmPapers', x)
  })
  if(userPhoneNumber){
    requestBody.append('phone', userPhoneNumber)
  }
  return new Promise((resolve, reject) => {
    axios.post(
      `account/authenticate/`,
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          "Authorization": `Firebase ${token}`
        }
      }
    ).then((res) => {
      if(res.data.data) {
        resolve(res.data.data) 
      }
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}

export const deactivateAccount = async (token) => {

  return new Promise((resolve, reject) => {
    axios.post(
      `account/deactivate/`,
      {
        headers: {
          'Accept': 'application/json',
          "Authorization": `Bearer ${token}`
        }
      }
    ).then((res) => {
      if(res.data.data) {
        resolve(res.data.data) 
      }
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}

export const requestCodeApi = async (phoneNumber, countryCode) => {
  let requestBody = `countryCode=${countryCode}&phone=${phoneNumber}`
  return new Promise((resolve, reject) => {
    axios.post(
      `sandbox/phone/`,
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        resolve(res.data.data) 
      }
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}
export const AuthWithPhoneApi = async (token, name) => {
  let requestBody = name ? `name=${name}` : null
  return new Promise((resolve, reject) => {
    axios.post(
      `account/authenticate/`,
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          "Authorization": `Twilio ${token}`
        }
      }
    ).then((res) => {
      if(res.data.data) {
        resolve(res.data.data) 
      }
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}