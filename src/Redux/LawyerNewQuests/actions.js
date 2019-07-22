export const GET_Lawyer_New_QUESTIONS_REQUEST = 'GET_Lawyer_New_QUESTIONS_REQUEST'
export const SEARCH_Lawyer_New_QUESTIONS_REQUEST = 'SEARCH_Lawyer_New_QUESTIONS_REQUEST'
export const FILTER_Lawyer_New_QUESTIONS_REQUEST = 'FILTER_Lawyer_New_QUESTIONS_REQUEST'
export const GET_Lawyer_New_QUESTIONS_SUCCESS = 'GET_Lawyer_New_QUESTIONS_SUCCESS'
export const GET_Lawyer_New_QUESTIONS_LOADING = 'GET_Lawyer_New_QUESTIONS_LOADING'
export const GET_Lawyer_New_QUESTIONS_ERROR = 'GET_Lawyer_New_QUESTIONS_ERROR'
export const SET_Lawyer_New_QUESTIONS_PG_TOKEN = 'SET_Lawyer_New_QUESTIONS_PG_TOKEN'

export const getLawyerNewQuestionsRequest = () => {
  return{
    type: GET_Lawyer_New_QUESTIONS_REQUEST
  }
}

export const searchLawyerNewQuestionsRequest = (query) => {
  return{
    type: SEARCH_Lawyer_New_QUESTIONS_REQUEST,
    query
  }
}
export const filterLawyerNewQuestionsRequest = (topicID) => {
  return{
    type: FILTER_Lawyer_New_QUESTIONS_REQUEST,
    topicID
  }
}

export const getLawyerNewQuestionsSuccess = (questions) => {
  return{
    type: GET_Lawyer_New_QUESTIONS_SUCCESS,
    questions
  }
}

export const getLawyerNewQuestionsError = (error) => {
  return{
    type: GET_Lawyer_New_QUESTIONS_ERROR,
    error
  }
}

export const getLawyerNewQuestionsLoading = (isLoading) => {
  return{
    type: GET_Lawyer_New_QUESTIONS_LOADING,
    isLoading
  }
}

export const setLawyerNewQuestionsPageToken = (pageToken) => {
  return{
    type: SET_Lawyer_New_QUESTIONS_PG_TOKEN,
    pageToken
  }
}

export const getLawyerNewQuestionsLoadMore = () => {
  return{
    type: 'getLawyerNewQuestionsLoadMore'
  }
}

export const getLawyerNewQuestionsLoadingMore = (isLoading) => {
  return{
    type: 'getLawyerNewQuestionsLoadingMore',
    isLoading
  }
}
export const getLawyerNewQuestionsNoMore = (isNoMore) => {
  return{
    type: 'getLawyerNewQuestionsNoMore',
    isNoMore
  }
}