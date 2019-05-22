
export const setLoggedUser = (isLogged) => {
  return{
    type: 'setLoggedUser',
    isLogged
  }
}
export const setUserName = (userName) => {
  return{
    type: 'setUserName',
    userName
  }
}
export const setCurrentUser = (currentUser) =>{
  return{
    type: 'setCurrentUser',
    currentUser
  }
}
export const setPhoneNumber = (phoneNumber) => {
  return {
    type:'setPhoneNumber',
    phoneNumber
  }
}

export const setMail = (mail) => {
  return {
    type:'setMail',
    mail
  }
}

export const setPassword = (password) => {
  return {
    type:'setPassword',
    password
  }
}