import axios from 'axios'

export const getUserOwnQuestionsApi = async (pageToken, accessToken) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `me/questions/?page=${pageToken}`,    
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log('res.data.data ',res.data.data)
        resolve(res.data) 
      }
      else{
        //console.log('res.data.error.message ',res.data.error.message)
        reject(res.data.error.message)
      }
    }).catch(err => {
      //console.log('err ',err)
      reject(err)
    })
  })  
}

export const searchUserOwnQuestionsApi = async (pageToken, accessToken, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `me/questions/?page=${pageToken}&query=${query}`,    
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

export const filterUserOwnQuestionsApi = async (pageToken, accessToken, topicID) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `me/questions/?page=${pageToken}&topicId=${topicID}`,    
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