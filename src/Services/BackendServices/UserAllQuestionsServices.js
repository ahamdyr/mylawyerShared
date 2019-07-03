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
        // console.log('res.data.data  ',res.data.nextPageToken)
        // console.log('res.data.data  ',res.data.data.length)
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

export const filterUserAllQuestionsApi = async (pageToken, topicID, query) => {  
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

export const searchUserAllQuestionsApi = async (pageToken, topicID, query) => {  
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
        //console.log('res.data.data ', res.data.data[0] )
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