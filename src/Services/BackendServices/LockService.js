import axios from 'axios'

export const lockApi = async (questionID, accessToken) => {  

  return new Promise((resolve, reject) => {
    axios.post(
      `questions/${questionID}/locks/`,
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log('res.data.data  ',res.data)
        resolve(res.data) 
      }
      else{
        //console.log('res.data.error  ',res.data)
        reject(res.data.error.message)
      }
    }).catch(err => {
      //console.log('err  ',err)
      reject(err)
    })
  })  
}

export const reAskApi = async (questionID, accessToken) => {  

  return new Promise((resolve, reject) => {
    axios.post(
      `questions/${questionID}/locks/`,
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log('res.data.data  ',res.data)
        resolve(res.data) 
      }
      else{
        //console.log('res.data.error  ',res.data)
        reject(res.data.error.message)
      }
    }).catch(err => {
      //console.log('err  ',err)
      reject(err)
    })
  })  
}