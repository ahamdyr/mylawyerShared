import {
  GET_Lawyer_Solved_QUESTIONS_ERROR,
  GET_Lawyer_Solved_QUESTIONS_LOADING,
  GET_Lawyer_Solved_QUESTIONS_SUCCESS,
  SET_Lawyer_Solved_QUESTIONS_PG_TOKEN,
  FILTER_Lawyer_Solved_QUESTIONS_REQUEST,
  GET_Lawyer_Solved_QUESTIONS_REQUEST,
  SEARCH_Lawyer_Solved_QUESTIONS_REQUEST
} from './actions'

import { mockAllQuestions } from '../../Services/BackendServices/MockData'

export const getLawyerSolvedQuestionsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_Lawyer_Solved_QUESTIONS_SUCCESS:
      return action.questions
    default:
      return state
  }
}

export const getLawyerSolvedQuestionsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_Lawyer_Solved_QUESTIONS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const getLawyerSolvedQuestionsError = (state = '', action) => {
  switch (action.type) {
    case GET_Lawyer_Solved_QUESTIONS_ERROR:
      return action.error
    default:
      return state
  }
}

export const LawyerSolvedQuestionsPageToken = (state = '', action) => {
  switch (action.type) {
    case SET_Lawyer_Solved_QUESTIONS_PG_TOKEN:
      return action.pageToken
    case FILTER_Lawyer_Solved_QUESTIONS_REQUEST:
      return ''
    case GET_Lawyer_Solved_QUESTIONS_REQUEST:
      return ''
    case SEARCH_Lawyer_Solved_QUESTIONS_REQUEST:
      return ''
    default:
      return state
  }
}

export const LawyerSolvedQuestionsFilterTopic = (state = '', action) => {
  switch (action.type) {
    case FILTER_Lawyer_Solved_QUESTIONS_REQUEST:
      return action.topicID
    default:
      return state
  }
}
export const LawyerSolvedQuestionsSearchQuery = (state = '', action) => {
  switch (action.type) {
    case SEARCH_Lawyer_Solved_QUESTIONS_REQUEST:
      return action.query
    default:
      return state
  }
}

export const getLawyerSolvedQuestionsLoadingMore = (state = false, action) => {
  switch (action.type) {
    case 'getLawyerSolvedQuestionsLoadingMore':
      return action.isLoading
    default:
      return state
  }
}
export const getLawyerSolvedQuestionsNoMore = (state = false, action) => {
  switch (action.type) {
    case 'getLawyerSolvedQuestionsNoMore':
      return action.isNoMore
    default:
      return state
  }
}