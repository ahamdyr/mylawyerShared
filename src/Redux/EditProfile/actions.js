export const EDIT_NAME = 'EDIT_NAME'
export const EDIT_EMAIL = 'EDIT_EMAIL'
export const EDIT_PHONE_NUMBER = 'EDIT_PHONE_NUMBER'
export const EDIT_PHOTO = 'EDIT_PHOTO'
export const SUBMIT_UPDATES = 'SUBMIT_UPDATES'

export const editName = (name) => {
  return{
    type: EDIT_NAME,
    name
  }
}

export const editEmail = (email) => {
  return{
    type: EDIT_EMAIL,
    email
  }
}

export const EDIT_PHONE_NUMBER = (error) => {
  return{
    type: GET_LAWYERS_ERROR,
    error
  }
}

export const getLawyersLoading = (isLoading) => {
  return{
    type: GET_LAWYERS_LOADING,
    isLoading
  }
}

export const setLawyersPageToken = (pageToken) => {
  return{
    type: SET_LAWYERS_PG_TOKEN,
    pageToken
  }
}