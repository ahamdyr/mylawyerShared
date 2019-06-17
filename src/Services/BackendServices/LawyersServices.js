import axios from 'axios'

export const getLawyersApi = async (pageToken) => {

  // let x = [
  //   { id: 1, name: 'ALL TOPICS' },
  //   { id: 2, name: 'Topic 1' },
  //   { id: 3, name: 'Topic 2' },
  //   { id: 4, name: 'Topic 3' },
  //   { id: 5, name: 'Topic 4' }
  // ]
  // return {
  //   topics: x,
  //   newPageToken: null
  // }
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