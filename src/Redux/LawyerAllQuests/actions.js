export const GET_Lawyer_All_QUESTIONS_REQUEST = 'GET_Lawyer_All_QUESTIONS_REQUEST'
export const SEARCH_Lawyer_All_QUESTIONS_REQUEST = 'SEARCH_Lawyer_All_QUESTIONS_REQUEST'
export const FILTER_Lawyer_All_QUESTIONS_REQUEST = 'FILTER_Lawyer_All_QUESTIONS_REQUEST'
export const GET_Lawyer_All_QUESTIONS_SUCCESS = 'GET_Lawyer_All_QUESTIONS_SUCCESS'
export const GET_Lawyer_All_QUESTIONS_LOADING = 'GET_Lawyer_All_QUESTIONS_LOADING'
export const GET_Lawyer_All_QUESTIONS_ERROR = 'GET_Lawyer_All_QUESTIONS_ERROR'
export const SET_Lawyer_All_QUESTIONS_PG_TOKEN = 'SET_Lawyer_All_QUESTIONS_PG_TOKEN'

export const getLawyerAllQuestionsRequest = () => {
  return{
    type: GET_Lawyer_All_QUESTIONS_REQUEST
  }
}

export const searchLawyerAllQuestionsRequest = (query) => {
  return{
    type: SEARCH_Lawyer_All_QUESTIONS_REQUEST,
    query
  }
}
export const filterLawyerAllQuestionsRequest = (topicID) => {
  return{
    type: FILTER_Lawyer_All_QUESTIONS_REQUEST,
    topicID
  }
}

export const getLawyerAllQuestionsSuccess = (questions) => {
  return{
    type: GET_Lawyer_All_QUESTIONS_SUCCESS,
    questions
  }
}

export const getLawyerAllQuestionsError = (error) => {
  return{
    type: GET_Lawyer_All_QUESTIONS_ERROR,
    error
  }
}

export const getLawyerAllQuestionsLoading = (isLoading) => {
  return{
    type: GET_Lawyer_All_QUESTIONS_LOADING,
    isLoading
  }
}

export const setLawyerAllQuestionsPageToken = (pageToken) => {
  return{
    type: SET_Lawyer_All_QUESTIONS_PG_TOKEN,
    pageToken
  }
}

export const getLawyerAllQuestionsLoadMore = () => {
  return{
    type: 'getLawyerAllQuestionsLoadMore'
  }
}

export const getLawyerAllQuestionsLoadingMore = (isLoading) => {
  return{
    type: 'getLawyerAllQuestionsLoadingMore',
    isLoading
  }
}
export const getLawyerAllQuestionsNoMore = (isNoMore) => {
  return{
    type: 'getLawyerAllQuestionsNoMore',
    isNoMore
  }
}