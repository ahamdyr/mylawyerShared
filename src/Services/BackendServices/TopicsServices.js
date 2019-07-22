import axios from 'axios'

export const getTopicsApi = async (pageToken) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `topics/?page=${pageToken}`,    
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