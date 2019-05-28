

export const userMail = (state = '', action) => {
  switch (action.type) {
    case 'setMail':
      return action.mail
    default:
      return state
  }
}
export const userName = (state = '', action) => {
  switch (action.type) {
    case 'setUserName':
      return action.userName
    default:
      return state
  }
}

export const accessToken = (state = '', action) => {
  switch (action.type) {
    case 'setAccessToken':
      return action.accessToken
    default:
      return state
  }
}
export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'setCurrentUser':
      return action.currentUser
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

export const isLoggedUser = (state = false, action) => {
  switch (action.type) {
    case 'setLoggedUser':
      return action.isLogged
    default:
      return state
  }
}