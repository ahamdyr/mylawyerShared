import axios from 'axios'

export const answerApi = async (questionID, accessToken, body) => {  

  let requestBody = `body=${body}`

  return new Promise((resolve, reject) => {
    axios.post(
      `questions/${questionID}/answers/`,   
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          "Content-Type": `application/x-www-form-urlencoded`
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