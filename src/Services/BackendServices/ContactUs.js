import axios from 'axios'

export const contactUsApi = async (email, body) => {  
  
  let requestBody = `email=${email}&body=${body}`

  return new Promise((resolve, reject) => {
    axios.post(
      `support/`,    
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          "Content-Type": `application/x-www-form-urlencoded`
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log('res.data.data  ',res.data)
        resolve(res.data) 
      }
      else{
        //console.log('res.data.error  ',res.data)
        reject(res.data.error.message)
      }
    }).catch(err => {
      //console.log('err  ',err)
      reject(err)
    })
  })  
}