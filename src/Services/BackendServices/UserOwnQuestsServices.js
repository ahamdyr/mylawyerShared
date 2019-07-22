import axios from 'axios'

export const UserOwnQuestionsApi = async (pageToken, accessToken, topicID, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `me/questions/?page=${pageToken}&topicId=${topicID}&query=${query}`,    
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log(res.data.data)
        resolve(res.data) 
      }
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}