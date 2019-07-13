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
  // return new Promise((resolve, reject) => {
  //   axios.post(
  //     `questions/${questionID}/locks/`,
  //     {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Authorization': `Bearer ${accessToken}`,
  //         "Content-Type": `application/x-www-form-urlencoded`
  //       }
  //     }
  //   ).then((res) => {
  //     if(res.data.data) {
  //       //console.log('res.data.data  ',res.data)
  //       resolve(res.data) 
  //     }
  //     else{
  //       //console.log('res.data.error  ',res.data)
  //       reject(res.data.error.message)
  //     }
  //   }).catch(err => {
  //     //console.log('err  ',err)
  //     reject(err.message)
  //   })
  // })  
}

export const reAskApi = async (questionID, accessToken) => {

  return new Promise((resolve, reject) => {
    axios.post(
      `questions/${questionID}/locks/`,
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    ).then((res) => {
      if (res.data.data) {
        //console.log('res.data.data  ',res.data)
        resolve(res.data)
      }
      else {
        //console.log('res.data.error  ',res.data)
        reject(res.data.error.message)
      }
    }).catch(err => {
      //console.log('err  ',err)
      reject(err)
    })
  })
}