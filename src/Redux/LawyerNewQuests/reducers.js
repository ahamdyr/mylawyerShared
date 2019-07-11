import {
  GET_Lawyer_New_QUESTIONS_ERROR,
  GET_Lawyer_New_QUESTIONS_LOADING,
  GET_Lawyer_New_QUESTIONS_SUCCESS,
  SET_Lawyer_New_QUESTIONS_PG_TOKEN,
  FILTER_Lawyer_New_QUESTIONS_REQUEST,
  GET_Lawyer_New_QUESTIONS_REQUEST,
  SEARCH_Lawyer_New_QUESTIONS_REQUEST
} from './actions'

import { mockAllQuestions } from '../../Services/BackendServices/MockData'

export const getLawyerNewQuestionsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_Lawyer_New_QUESTIONS_SUCCESS:
      return action.questions
    default:
      return state
  }
}

export const getLawyerNewQuestionsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_Lawyer_New_QUESTIONS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const getLawyerNewQuestionsError = (state = '', action) => {
  switch (action.type) {
    case GET_Lawyer_New_QUESTIONS_ERROR:
      return action.error
    default:
      return state
  }
}

export const LawyerNewQuestionsPageToken = (state = '', action) => {
  switch (action.type) {
    case SET_Lawyer_New_QUESTIONS_PG_TOKEN:
      return action.pageToken
    case FILTER_Lawyer_New_QUESTIONS_REQUEST:
      return ''
    case GET_Lawyer_New_QUESTIONS_REQUEST:
      return ''
    case SEARCH_Lawyer_New_QUESTIONS_REQUEST:
      return ''
    default:
      return state
  }
}

export const LawyerNewQuestionsFilterTopic = (state = '', action) => {
  switch (action.type) {
    case FILTER_Lawyer_New_QUESTIONS_REQUEST:
      return action.topicID
    default:
      return state
  }
}
export const LawyerNewQuestionsSearchQuery = (state = '', action) => {
  switch (action.type) {
    case SEARCH_Lawyer_New_QUESTIONS_REQUEST:
      return action.query
    default:
      return state
  }
}

export const getLawyerNewQuestionsLoadingMore = (state = false, action) => {
  switch (action.type) {
    case 'getLawyerNewQuestionsLoadingMore':
      return action.isLoading
    default:
      return state
  }
}
export const getLawyerNewQuestionsNoMore = (state = false, action) => {
  switch (action.type) {
    case 'getLawyerNewQuestionsNoMore':
      return action.isNoMore
    default:
      return state
  }
}