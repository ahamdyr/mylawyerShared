

export const submitMessage = (email, body) => {
  return{
    type: 'submitMessage',
    email, body
  }
}

export const clearContactUsData = (bool) => {
  return{
    type: 'clearContactUsData',
    bool
  }
}