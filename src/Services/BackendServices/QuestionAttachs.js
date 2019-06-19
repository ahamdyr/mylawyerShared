import axios from 'axios'
import {
  mockAttachs
 } from './MockData'

export const getQuestionAttachsApi = async (questionID, pageToken) => {  
  return {
    questionAttachs: mockAttachs,
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