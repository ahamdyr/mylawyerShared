import axios from 'axios'

export const Register = async (type, token) => {
  let requestBody = new FormData()
  requestBody.append('type', type)
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

export const LawyerRegister = async (type, token, lawyerMajor, lawyerIDsLinks, firmPapersLinks) => {

  let requestBody = `type=${type}&majors=${lawyerMajor.id}`

  lawyerIDsLinks.forEach(e=>{
    requestBody = requestBody + `&idPapers=${e}`
  })
  firmPapersLinks.forEach(x=>{
    requestBody = requestBody + `&firmPapers=${x}`
  })

  return new Promise((resolve, reject) => {
    axios.post(
      `account/authenticate/`,
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          "Authorization": `Firebase ${token}`,
          "Content-Type": "application/x-www-form-urlencoded"
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