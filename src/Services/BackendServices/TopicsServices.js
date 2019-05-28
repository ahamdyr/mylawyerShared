import axios from 'axios'

export const getTopicsApi = async (pageToken = null) => {

  console.log('pageToken  ', pageToken)
  // try {
  //   let res = await axios.post(
  //     '/api/beta/account/register/',
  //     JSON.stringify(type),
  //     {
  //       headers:{
  //         'Content-Type': 'application/json',
  //         "Authorization": `Firebase ${token}`
  //       }
  //     }
  //   );    
    
  //   //let result = await res.json()
  //   console.log('result  ',res.data)
  // } catch (error) {
  //   console.log('error  ', error)
  // }
}