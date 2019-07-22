import axios from 'axios'

export const askQuestionApi = async (topicID, accessToken, title, body) => {  
  
  let requestBody = new FormData()
  requestBody.append('title', title)
  requestBody.append('body', body)
  
  return new Promise((resolve, reject) => {
    axios.post(
      `topics/${topicID}/questions/`, 
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