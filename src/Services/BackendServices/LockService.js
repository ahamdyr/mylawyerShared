import axios from 'axios'

export const lockApi = async (questionID, accessToken) => {

  return new Promise((resolve, reject) => {
    fetch(`${baseURL}questions/${questionID}/locks/`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      })
      .then(res => {
        res.json()
          .then(data => {
            if (data.data) {
              //console.log('data ', data.data)
              resolve(data.data)
            }
            else {
              //console.log('data.error ', data.error.message)
              reject(data.error.message)
            }
          })
      })
      .catch(err => {
        //console.log('err ', err)
        reject(err)
      })
  })
}

export const reAskApi = async (questionID, accessToken) => {

  return new Promise((resolve, reject) => {
    fetch(`${baseURL}questions/${questionID}/locks/`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      })
      .then(res => {
        res.json()
          .then(data => {
            if (data.data) {
              //console.log('data ', data.data)
              resolve(data.data)
            }
            else {
              //console.log('data.error ', data.error.message)
              reject(data.error.message)
            }
          })
      })
      .catch(err => {
        //console.log('err ', err)
        reject(err)
      })
  })
}