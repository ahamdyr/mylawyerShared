import axios from 'axios'

export const getQuestionAnswersApi = async (questionID, pageToken) => {  
  return new Promise((resolve, reject) => {
    axios.get(
      `questions/${questionID}/answers/`,    
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then((res) => {
      if(res.data.data) {
        //console.log('res.data.data ',res.data.data)
        resolve(res.data.data) 
      }
      else{
        //console.log('res.data.error.message  ',res.data.error.message)
        reject(res.data.error.message)
      }
    }).catch(err => {
      //console.log('err  ',err)
      reject(err)
    })
  })  
}