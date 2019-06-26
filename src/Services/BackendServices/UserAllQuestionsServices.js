import axios from 'axios'

export const getUserAllQuestionsApi = async (pageToken) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `questions/?page=${pageToken}`,    
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then((res) => {
      if(res.data.data) {
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

export const filterUserAllQuestionsApi = async (pageToken, topicID) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `topics/${topicID}/questions/?page=${pageToken}`,    
      {
        headers: {
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

export const searchUserAllQuestionsApi = async (pageToken, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `questions/?page=${pageToken}&query=${query}`,    
      {
        headers: {
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