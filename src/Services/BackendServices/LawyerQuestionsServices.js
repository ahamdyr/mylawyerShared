import axios from 'axios'

export const LawyerAllQuestionsApi = async (pageToken, accessToken, topicID, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      //`me/questions/?page=${pageToken}&topicId=${topicID}&query=${query}`,    
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
//////////////////////////////////////////////////////////////////////////////////////////
export const LawyerNewQuestionsApi = async (pageToken, accessToken, topicID, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      //`me/questions/?page=${pageToken}&topicId=${topicID}&query=${query}`,    
      `me/questions/?page=${pageToken}&query=${query}&state=new`,    
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
//////////////////////////////////////////////////////////////////////////////////////////
export const LawyerLockedQuestionsApi = async (pageToken, accessToken, topicID, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      //`me/questions/?page=${pageToken}&topicId=${topicID}&query=${query}`,    
      `me/questions/?page=${pageToken}&query=${query}&state=locked`,    
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
//////////////////////////////////////////////////////////////////////////////////////////
export const LawyerSolvedQuestionsApi = async (pageToken, accessToken, topicID, query) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      //`me/questions/?page=${pageToken}&topicId=${topicID}&query=${query}`,    
      `me/questions/?page=${pageToken}&query=${query}&state=solved`,    
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