

export const userMail = (state = '', action) => {
  switch (action.type) {
    case 'setMail':
      return action.mail
    default:
      return state
  }
}

export const userPhoneNumber = (state = '', action) => {
  switch (action.type) {
    case 'setPhoneNumber':
      return action.phoneNumber
    default:
      return state
  }
}

export const userPassword = (state = '', action) => {
  switch (action.type) {
    case 'setPassword':
      return action.password
    default:
      return state
  }
}