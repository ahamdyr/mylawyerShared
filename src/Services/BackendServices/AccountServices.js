import axios from 'axios'

export const Register = async (type, token) => {
  let body = new FormData()
  body.append('type', type)
  return new Promise((resolve, reject) => {
    axios.post(
      '/api/beta/account/register/',
      body,
      {
        headers: {
          'Accept': 'application/json',
          "Authorization": `Firebase ${token}`
        }
      }
    ).then((res) => {
      if(res.data.data) resolve(res.data.data) 
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}

export const Login = async (token) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      "/api/beta/account/login/",
      {
        headers: {
          'Accept': 'application/json',
          "Authorization": `Firebase ${token}`
        }
      }
    ).then((res) => {
      if(res.data.data) resolve(res.data.data) 
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}