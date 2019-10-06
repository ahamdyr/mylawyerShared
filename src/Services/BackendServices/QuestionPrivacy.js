import axios from 'axios'

export const changeQuestionPrivacyApi = async (questionID, privacy, accessToken) => {  
  
  let requestBody = privacy == 'Public' ? `makePublic=${true}` : `makePrivate=${true}`  
  
  return new Promise((resolve, reject) => {
    axios.put(
      `questions/${questionID}/`,
      requestBody,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          "Content-Type": `application/x-www-form-urlencoded`
        }
      }
    ).then((res) => {
      if(res.data.data) {
        // console.log(res.data.data)
        resolve(res.data.data) 
      }
      else{
        // console.log(res.data.error.message)
        reject(res.data.error.message)
      }
    }).catch(err => {
      // console.log(err)
      reject(err)
    })
  })  
}