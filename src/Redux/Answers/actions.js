export const GET_ANSWERS_REQUEST = 'GET_ANSWERS_REQUEST'
export const GET_ANSWERS_SUCCESS = 'GET_ANSWERS_SUCCESS'
export const GET_ANSWERS_LOADING = 'GET_ANSWERS_LOADING'
export const ANSWERS_PAGE_TOKEN = 'ANSWERS_PAGE_TOKEN'

export const getAnswersRequest = (questionID) => {
  return{
    type: GET_ANSWERS_REQUEST,
    questionID
  }
}

export const getAnswersSuccess = (answers) => {
  return{
    type: GET_ANSWERS_SUCCESS,
    answers
  }
}

export const getAnswersLoading = (isLoading) => {
  return{
    type: GET_ANSWERS_LOADING,
    isLoading
  }
}

export const answersPageToken = (pageToken) => {
  return{
    type: ANSWERS_PAGE_TOKEN,
    pageToken
  }
}