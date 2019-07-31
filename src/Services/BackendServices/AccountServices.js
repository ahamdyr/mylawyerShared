import axios from 'axios'

export const Register = async (type, token, userPhoneNumber) => {
  let requestBody = new FormData()
  requestBody.append('type', type)
  //requestBody.append('phoneNumber', userPhoneNumber)
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