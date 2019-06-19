import axios from 'axios'
import { mockTopics } from './MockData'
export const getTopicsApi = async (pageToken) => {  
  return {
    topics: mockTopics,
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