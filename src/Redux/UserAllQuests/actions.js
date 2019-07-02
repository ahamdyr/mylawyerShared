export const GET_USER_ALL_QUESTIONS_REQUEST = 'GET_USER_ALL_QUESTIONS_REQUEST'
export const SEARCH_USER_ALL_QUESTIONS_REQUEST = 'SEARCH_USER_ALL_QUESTIONS_REQUEST'
export const FILTER_USER_ALL_QUESTIONS_REQUEST = 'FILTER_USER_ALL_QUESTIONS_REQUEST'
export const GET_USER_ALL_QUESTIONS_SUCCESS = 'GET_USER_ALL_QUESTIONS_SUCCESS'
export const GET_USER_ALL_QUESTIONS_LOADING = 'GET_USER_ALL_QUESTIONS_LOADING'
export const GET_USER_ALL_QUESTIONS_ERROR = 'GET_USER_ALL_QUESTIONS_ERROR'
export const SET_USER_ALL_QUESTIONS_PG_TOKEN = 'SET_USER_ALL_QUESTIONS_PG_TOKEN'

export const getUserAllQuestionsRequest = () => {
  return{
    type: GET_USER_ALL_QUESTIONS_REQUEST
  }
}

export const searchUserAllQuestionsRequest = (query) => {
  return{
    type: SEARCH_USER_ALL_QUESTIONS_REQUEST,
    query
  }
}
export const filterUserAllQuestionsRequest = (topicID) => {
  return{
    type: FILTER_USER_ALL_QUESTIONS_REQUEST,
    topicID
  }
}

export const getUserAllQuestionsError = (error) => {
  return{
    type: GET_USER_ALL_QUESTIONS_ERROR,
    error
  }
}

export const getUserAllQuestionsLoading = (isLoading) => {
  return{
    type: GET_USER_ALL_QUESTIONS_LOADING,
    isLoading
  }
}

export const getUserAllQuestionsSuccess = (questions) => {
  return{
    type: GET_USER_ALL_QUESTIONS_SUCCESS,
    questions
  }
}


export const setUserAllQuestionsPageToken = (pageToken) => {
  return{
    type: SET_USER_ALL_QUESTIONS_PG_TOKEN,
    pageToken
  }
}

export const getUserAllQuestionsLoadMore = () => {
  return{
    type: 'getUserAllQuestionsLoadMore'
  }
}

export const getUserAllQuestionsLoadingMore = (isLoading) => {
  return{
    type: 'getUserAllQuestionsLoadingMore',
    isLoading
  }
}
export const getUserAllQuestionsNoMore = (isNoMore) => {
  return{
    type: 'getUserAllQuestionsNoMore',
    isNoMore
  }
}



