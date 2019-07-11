export const GET_Lawyer_Locked_QUESTIONS_REQUEST = 'GET_Lawyer_Locked_QUESTIONS_REQUEST'
export const SEARCH_Lawyer_Locked_QUESTIONS_REQUEST = 'SEARCH_Lawyer_Locked_QUESTIONS_REQUEST'
export const FILTER_Lawyer_Locked_QUESTIONS_REQUEST = 'FILTER_Lawyer_Locked_QUESTIONS_REQUEST'
export const GET_Lawyer_Locked_QUESTIONS_SUCCESS = 'GET_Lawyer_Locked_QUESTIONS_SUCCESS'
export const GET_Lawyer_Locked_QUESTIONS_LOADING = 'GET_Lawyer_Locked_QUESTIONS_LOADING'
export const GET_Lawyer_Locked_QUESTIONS_ERROR = 'GET_Lawyer_Locked_QUESTIONS_ERROR'
export const SET_Lawyer_Locked_QUESTIONS_PG_TOKEN = 'SET_Lawyer_Locked_QUESTIONS_PG_TOKEN'

export const getLawyerLockedQuestionsRequest = () => {
  return{
    type: GET_Lawyer_Locked_QUESTIONS_REQUEST
  }
}

export const searchLawyerLockedQuestionsRequest = (query) => {
  return{
    type: SEARCH_Lawyer_Locked_QUESTIONS_REQUEST,
    query
  }
}
export const filterLawyerLockedQuestionsRequest = (topicID) => {
  return{
    type: FILTER_Lawyer_Locked_QUESTIONS_REQUEST,
    topicID
  }
}

export const getLawyerLockedQuestionsSuccess = (questions) => {
  return{
    type: GET_Lawyer_Locked_QUESTIONS_SUCCESS,
    questions
  }
}

export const getLawyerLockedQuestionsError = (error) => {
  return{
    type: GET_Lawyer_Locked_QUESTIONS_ERROR,
    error
  }
}

export const getLawyerLockedQuestionsLoading = (isLoading) => {
  return{
    type: GET_Lawyer_Locked_QUESTIONS_LOADING,
    isLoading
  }
}

export const setLawyerLockedQuestionsPageToken = (pageToken) => {
  return{
    type: SET_Lawyer_Locked_QUESTIONS_PG_TOKEN,
    pageToken
  }
}

export const getLawyerLockedQuestionsLoadMore = () => {
  return{
    type: 'getLawyerLockedQuestionsLoadMore'
  }
}

export const getLawyerLockedQuestionsLoadingMore = (isLoading) => {
  return{
    type: 'getLawyerLockedQuestionsLoadingMore',
    isLoading
  }
}
export const getLawyerLockedQuestionsNoMore = (isNoMore) => {
  return{
    type: 'getLawyerLockedQuestionsNoMore',
    isNoMore
  }
}