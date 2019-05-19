
export const setLoggedUser = (isLogged) => {
  return{
    type: 'setLoggedUser',
    isLogged
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
