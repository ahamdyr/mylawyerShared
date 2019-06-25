import axios from 'axios'

export const getUserOwnQuestionsApi = async (pageToken, accessToken) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `questions/?page=${pageToken}`,    
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

export const searchUserOwnQuestionsApi = async (pageToken, accessToken, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `questions/?page=${pageToken}&query=${query}`,    
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