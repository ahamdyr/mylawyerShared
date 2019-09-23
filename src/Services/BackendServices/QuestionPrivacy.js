import axios from 'axios'

export const changeQuestionPrivacyApi = async (questionID, privacy, accessToken) => {  

  let requestBody = new FormData()
  privacy == 'Public' ?
    requestBody.append('makePublic', true)
    : requestBody.append('makePrivate', true)  

  return new Promise((resolve, reject) => {
    axios.put(
      `questions/${questionID}/`,    
      requestBody,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
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