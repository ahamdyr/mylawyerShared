import axios from 'axios'
import { mockLawyersList } from './MockData'
//import { navigate, goBack} from '../NavigationServices'

export const getLawyersApi = async (pageToken) => {
  // return {
  //   lawyers: mockLawyersList,
  //   newPageToken: ''
  // }  
  return new Promise((resolve, reject) => {
    axios.get(
      `lawyers/?page=${pageToken}`,    
      {
        headers: {
          'Accept': 'application/javascript'
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