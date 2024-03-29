export const GET_USER_OWN_QUESTIONS_REQUEST = 'GET_USER_OWN_QUESTIONS_REQUEST'
export const SEARCH_USER_OWN_QUESTIONS_REQUEST = 'SEARCH_USER_OWN_QUESTIONS_REQUEST'
export const FILTER_USER_OWN_QUESTIONS_REQUEST = 'FILTER_USER_OWN_QUESTIONS_REQUEST'
export const GET_USER_OWN_QUESTIONS_SUCCESS = 'GET_USER_OWN_QUESTIONS_SUCCESS'
export const GET_USER_OWN_QUESTIONS_LOADING = 'GET_USER_OWN_QUESTIONS_LOADING'
export const GET_USER_OWN_QUESTIONS_ERROR = 'GET_USER_OWN_QUESTIONS_ERROR'
export const SET_USER_OWN_QUESTIONS_PG_TOKEN = 'SET_USER_OWN_QUESTIONS_PG_TOKEN'

export const getUserOwnQuestionsRequest = () => {
  return{
    type: GET_USER_OWN_QUESTIONS_REQUEST
  }
}

export const searchUserOwnQuestionsRequest = (query) => {
  return{
    type: SEARCH_USER_OWN_QUESTIONS_REQUEST,
    query
  }
}
export const filterUserOwnQuestionsRequest = (topicID) => {
  return{
    type: FILTER_USER_OWN_QUESTIONS_REQUEST,
    topicID
  }
}

export const getUserOwnQuestionsSuccess = (questions) => {
  return{
    type: GET_USER_OWN_QUESTIONS_SUCCESS,
    questions
  }
}

export const getUserOwnQuestionsError = (error) => {
  return{
    type: GET_USER_OWN_QUESTIONS_ERROR,
    error
  }
}

export const getUserOwnQuestionsLoading = (isLoading) => {
  return{
    type: GET_USER_OWN_QUESTIONS_LOADING,
    isLoading
  }
}

export const setUserOwnQuestionsPageToken = (pageToken) => {
  return{
    type: SET_USER_OWN_QUESTIONS_PG_TOKEN,
    pageToken
  }
}

export const getUserOwnQuestionsLoadMore = () => {
  return{
    type: 'getUserOwnQuestionsLoadMore'
  }
}

export const getUserOwnQuestionsLoadingMore = (isLoading) => {
  return{
    type: 'getUserOwnQuestionsLoadingMore',
    isLoading
  }
}
export const getUserOwnQuestionsNoMore = (isNoMore) => {
  return{
    type: 'getUserOwnQuestionsNoMore',
    isNoMore
  }
}