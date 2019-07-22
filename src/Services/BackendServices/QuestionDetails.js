import axios from 'axios'

export const getQuestionDetailsApi = async (questionID, pageToken) => {  

  return new Promise((resolve, reject) => {
    axios.get(
      `questions/${questionID}/`,    
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log(res.data.data)
        resolve(res.data.data) 
      }
      else{
        reject(res.data.error.message)
      }
    }).catch(err => {
      reject(err)
    })
  })  
}