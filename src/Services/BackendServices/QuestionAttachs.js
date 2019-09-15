import axios from 'axios'
import { addToStorage } from '../FirebaseServices/FirebaseStorage'

export const getQuestionAttachsApi = async (questionID) => {  

  return new Promise((resolve, reject) => {
    axios.get(
      `questions/${questionID}/attachments/`,    
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

export const addAttachmentApi = async (questionID, accessToken, link, type) => {

  let requestBody = new FormData()
  requestBody.append('link', link)
  requestBody.append('type', type)

  return new Promise((resolve, reject) => {
    axios.post(
      `questions/${questionID}/attachments/`,   
      requestBody,    
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`
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

const addSingleAttachService = async (attachment, questionID, accessToken) => {
  return new Promise((resolve, reject) => {
    var path = `Questions/${questionID}/${attachment.name}`
    addToStorage(path, attachment.uri)
      .then(link => {
        //console.log('link  ',link)
        addAttachmentApi(questionID, accessToken, link, attachment.type)
          .then(data => resolve(data))
          .catch(err => reject(err))
      })
      .catch(err => reject(err))
  })
}

export const addQuestionAttachsService = async (attachments, questionID, accessToken) => {

  let promisesList = []
  for (let attachment of attachments){
    promisesList.push(addSingleAttachService(attachment, questionID, accessToken))
  }
  return Promise.all(promisesList)
}