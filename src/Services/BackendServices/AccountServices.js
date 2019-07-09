import axios from 'axios'

export const Register = async (type, token, lawyerMajor, lawyerIDsLinks, firmPapersLinks) => {
  let body = new FormData()
  body.append('type', type)
  return new Promise((resolve, reject) => {
    axios.post(
      `account/authenticate/`,
      body,
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