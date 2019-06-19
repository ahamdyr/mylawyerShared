import axios from 'axios'
import {
  mockAnswers
 } from './MockData'

export const getQuestionAnswersApi = async (questionID, pageToken) => {  
  return {
    questionAnswers: mockAnswers,
    newPageToken: ''
  }
  // return new Promise((resolve, reject) => {
  //   axios.get(
  //     `topics/?page=${pageToken}`,    
  //     {
  //       headers: {
  //         'Accept': 'application/json'
  //       }
  //     }
  //   ).then((res) => {
  //     if(res.data.data) {
  //       //console.log(res.data.data)
  //       resolve(res.data.data) 
  //     }
  //     else{
  //       reject(res.data.error.message)
  //     }
  //   }).catch(err => {
  //     reject(err)
  //   })
  // })  
}