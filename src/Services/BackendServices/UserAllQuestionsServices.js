import axios from 'axios'

export const UserAllQuestionsApi = async (pageToken, topicID, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `topics/${topicID}/questions/?page=${pageToken}&query=${query}`,    
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log('res.data.data ', res.data.data )
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