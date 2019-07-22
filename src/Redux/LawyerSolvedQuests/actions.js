export const GET_Lawyer_Solved_QUESTIONS_REQUEST = 'GET_Lawyer_Solved_QUESTIONS_REQUEST'
export const SEARCH_Lawyer_Solved_QUESTIONS_REQUEST = 'SEARCH_Lawyer_Solved_QUESTIONS_REQUEST'
export const FILTER_Lawyer_Solved_QUESTIONS_REQUEST = 'FILTER_Lawyer_Solved_QUESTIONS_REQUEST'
export const GET_Lawyer_Solved_QUESTIONS_SUCCESS = 'GET_Lawyer_Solved_QUESTIONS_SUCCESS'
export const GET_Lawyer_Solved_QUESTIONS_LOADING = 'GET_Lawyer_Solved_QUESTIONS_LOADING'
export const GET_Lawyer_Solved_QUESTIONS_ERROR = 'GET_Lawyer_Solved_QUESTIONS_ERROR'
export const SET_Lawyer_Solved_QUESTIONS_PG_TOKEN = 'SET_Lawyer_Solved_QUESTIONS_PG_TOKEN'

export const getLawyerSolvedQuestionsRequest = () => {
  return{
    type: GET_Lawyer_Solved_QUESTIONS_REQUEST
  }
}

export const searchLawyerSolvedQuestionsRequest = (query) => {
  return{
    type: SEARCH_Lawyer_Solved_QUESTIONS_REQUEST,
    query
  }
}
export const filterLawyerSolvedQuestionsRequest = (topicID) => {
  return{
    type: FILTER_Lawyer_Solved_QUESTIONS_REQUEST,
    topicID
  }
}

export const getLawyerSolvedQuestionsSuccess = (questions) => {
  return{
    type: GET_Lawyer_Solved_QUESTIONS_SUCCESS,
    questions
  }
}

export const getLawyerSolvedQuestionsError = (error) => {
  return{
    type: GET_Lawyer_Solved_QUESTIONS_ERROR,
    error
  }
}

export const getLawyerSolvedQuestionsLoading = (isLoading) => {
  return{
    type: GET_Lawyer_Solved_QUESTIONS_LOADING,
    isLoading
  }
}

export const setLawyerSolvedQuestionsPageToken = (pageToken) => {
  return{
    type: SET_Lawyer_Solved_QUESTIONS_PG_TOKEN,
    pageToken
  }
}

export const getLawyerSolvedQuestionsLoadMore = () => {
  return{
    type: 'getLawyerSolvedQuestionsLoadMore'
  }
}

export const getLawyerSolvedQuestionsLoadingMore = (isLoading) => {
  return{
    type: 'getLawyerSolvedQuestionsLoadingMore',
    isLoading
  }
}
export const getLawyerSolvedQuestionsNoMore = (isNoMore) => {
  return{
    type: 'getLawyerSolvedQuestionsNoMore',
    isNoMore
  }
}