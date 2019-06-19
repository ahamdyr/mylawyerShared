import axios from 'axios'
import {mockLawyersList} from './MockData'

export const getLawyersApi = async (pageToken) => {  
  return {
    lawyers: mockLawyersList,
    newPageToken: ''
  }
  // return new Promise((resolve, reject) => {
  //   axios.get(
  //     `lawyers/?page=${pageToken}`,    
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