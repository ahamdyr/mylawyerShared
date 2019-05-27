import axios from 'axios'

export const Register = async (type, token) => {
  try {
    let res = await axios.post(
      '/api/beta/account/register/',
      JSON.stringify(type),
      {
        headers:{
          'Content-Type': 'application/json',
          "Authorization": `Firebase ${token}`
        }
      }
    );    
    
    //let result = await res.json()
    console.log('result  ',res.data)
  } catch (error) {
    console.log('error  ', error)
  }
}

export const Login = async (token) => {
  try {
    let res = await fetch("/api/beta/account/login/",{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": token
      }
    })
    let result = await res.json()
    console.log('result  ',result)
  } catch (error) {
    console.log('error  ', error)
  }
}