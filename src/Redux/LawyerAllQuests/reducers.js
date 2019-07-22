import {
  GET_Lawyer_All_QUESTIONS_ERROR,
  GET_Lawyer_All_QUESTIONS_LOADING,
  GET_Lawyer_All_QUESTIONS_SUCCESS,
  SET_Lawyer_All_QUESTIONS_PG_TOKEN,
  FILTER_Lawyer_All_QUESTIONS_REQUEST,
  GET_Lawyer_All_QUESTIONS_REQUEST,
  SEARCH_Lawyer_All_QUESTIONS_REQUEST
} from './actions'

import { mockAllQuestions } from '../../Services/BackendServices/MockData'

export const getLawyerAllQuestionsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_Lawyer_All_QUESTIONS_SUCCESS:
      return action.questions
    default:
      return state
  }
}

export const getLawyerAllQuestionsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_Lawyer_All_QUESTIONS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const getLawyerAllQuestionsError = (state = '', action) => {
  switch (action.type) {
    case GET_Lawyer_All_QUESTIONS_ERROR:
      return action.error
    default:
      return state
  }
}

export const LawyerAllQuestionsPageToken = (state = '', action) => {
  switch (action.type) {
    case SET_Lawyer_All_QUESTIONS_PG_TOKEN:
      return action.pageToken
    case FILTER_Lawyer_All_QUESTIONS_REQUEST:
      return ''
    case GET_Lawyer_All_QUESTIONS_REQUEST:
      return ''
    case SEARCH_Lawyer_All_QUESTIONS_REQUEST:
      return ''
    default:
      return state
  }
}

export const LawyerAllQuestionsFilterTopic = (state = '', action) => {
  switch (action.type) {
    case FILTER_Lawyer_All_QUESTIONS_REQUEST:
      return action.topicID
    default:
      return state
  }
}
export const LawyerAllQuestionsSearchQuery = (state = '', action) => {
  switch (action.type) {
    case SEARCH_Lawyer_All_QUESTIONS_REQUEST:
      return action.query
    default:
      return state
  }
}

export const getLawyerAllQuestionsLoadingMore = (state = false, action) => {
  switch (action.type) {
    case 'getLawyerAllQuestionsLoadingMore':
      return action.isLoading
    default:
      return state
  }
}
export const getLawyerAllQuestionsNoMore = (state = false, action) => {
  switch (action.type) {
    case 'getLawyerAllQuestionsNoMore':
      return action.isNoMore
    default:
      return state
  }
}