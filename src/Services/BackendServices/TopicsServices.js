import axios from 'axios'

export const getTopicsApi = async (pageToken) => {

  let x = [
    { id: 1, name: 'ALL TOPICS' },
    { id: 2, name: 'Topic 1' },
    { id: 3, name: 'Topic 2' },
    { id: 4, name: 'Topic 3' },
    { id: 5, name: 'Topic 4' }
  ]
  return {
    topics: x,
    newPageToken: null
  }
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