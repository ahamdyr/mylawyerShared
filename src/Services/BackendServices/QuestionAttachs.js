import axios from 'axios'

export const getQuestionAttachsApi = async (questionID) => {  

  return new Promise((resolve, reject) => {
    axios.get(
      `questions/${questionID}/attachments/`,    
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log(res.data.data)
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

export const addAttachmentApi = async (questionID, accessToken, link, type) => {

  let requestBody = new FormData()
  requestBody.append('link', link)
  requestBody.append('type', type)

  return new Promise((resolve, reject) => {
    axios.post(
      `questions/${questionID}/attachments/`,   
      requestBody,    
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log(res.data.data)
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