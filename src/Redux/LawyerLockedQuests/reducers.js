import {
  GET_Lawyer_Locked_QUESTIONS_ERROR,
  GET_Lawyer_Locked_QUESTIONS_LOADING,
  GET_Lawyer_Locked_QUESTIONS_SUCCESS,
  SET_Lawyer_Locked_QUESTIONS_PG_TOKEN,
  FILTER_Lawyer_Locked_QUESTIONS_REQUEST,
  GET_Lawyer_Locked_QUESTIONS_REQUEST,
  SEARCH_Lawyer_Locked_QUESTIONS_REQUEST
} from './actions'

import { mockAllQuestions } from '../../Services/BackendServices/MockData'

export const getLawyerLockedQuestionsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_Lawyer_Locked_QUESTIONS_SUCCESS:
      return action.questions
    default:
      return state
  }
}

export const getLawyerLockedQuestionsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_Lawyer_Locked_QUESTIONS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const getLawyerLockedQuestionsError = (state = '', action) => {
  switch (action.type) {
    case GET_Lawyer_Locked_QUESTIONS_ERROR:
      return action.error
    default:
      return state
  }
}

export const LawyerLockedQuestionsPageToken = (state = '', action) => {
  switch (action.type) {
    case SET_Lawyer_Locked_QUESTIONS_PG_TOKEN:
      return action.pageToken
    case FILTER_Lawyer_Locked_QUESTIONS_REQUEST:
      return ''
    case GET_Lawyer_Locked_QUESTIONS_REQUEST:
      return ''
    case SEARCH_Lawyer_Locked_QUESTIONS_REQUEST:
      return ''
    default:
      return state
  }
}

export const LawyerLockedQuestionsFilterTopic = (state = '', action) => {
  switch (action.type) {
    case FILTER_Lawyer_Locked_QUESTIONS_REQUEST:
      return action.topicID
    default:
      return state
  }
}
export const LawyerLockedQuestionsSearchQuery = (state = '', action) => {
  switch (action.type) {
    case SEARCH_Lawyer_Locked_QUESTIONS_REQUEST:
      return action.query
    default:
      return state
  }
}

export const getLawyerLockedQuestionsLoadingMore = (state = false, action) => {
  switch (action.type) {
    case 'getLawyerLockedQuestionsLoadingMore':
      return action.isLoading
    default:
      return state
  }
}
export const getLawyerLockedQuestionsNoMore = (state = false, action) => {
  switch (action.type) {
    case 'getLawyerLockedQuestionsNoMore':
      return action.isNoMore
    default:
      return state
  }
}