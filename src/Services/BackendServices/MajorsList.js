import axios from 'axios'

export const getMajorsApi = async () => {
  return new Promise((resolve, reject) => {
    axios.get(
      `https://hlogicodesk.pythonanywhere.com/api/beta/grouped_lawyers/`,    
      {
        headers: {
          'Accept': 'application/json'
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