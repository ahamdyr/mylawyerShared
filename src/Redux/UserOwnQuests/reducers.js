import {
  GET_USER_OWN_QUESTIONS_ERROR,
  GET_USER_OWN_QUESTIONS_LOADING,
  GET_USER_OWN_QUESTIONS_SUCCESS,
  SET_USER_OWN_QUESTIONS_PG_TOKEN,
  FILTER_USER_OWN_QUESTIONS_REQUEST,
  GET_USER_OWN_QUESTIONS_REQUEST,
  SEARCH_USER_OWN_QUESTIONS_REQUEST
} from './actions'

import { mockAllQuestions } from '../../Services/BackendServices/MockData'

export const getUserOwnQuestionsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_USER_OWN_QUESTIONS_SUCCESS:
      return action.questions
    default:
      return state
  }
}

export const getUserOwnQuestionsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_USER_OWN_QUESTIONS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const getUserOwnQuestionsError = (state = '', action) => {
  switch (action.type) {
    case GET_USER_OWN_QUESTIONS_ERROR:
      return action.error
    default:
      return state
  }
}

export const UserOwnQuestionsPageToken = (state = '', action) => {
  switch (action.type) {
    case SET_USER_OWN_QUESTIONS_PG_TOKEN:
      return action.pageToken
    case FILTER_USER_OWN_QUESTIONS_REQUEST:
      return ''
    case GET_USER_OWN_QUESTIONS_REQUEST:
      return ''
    case SEARCH_USER_OWN_QUESTIONS_REQUEST:
      return ''
    default:
      return state
  }
}

export const myQuestionsFilterTopic = (state = '', action) => {
  switch (action.type) {
    case FILTER_USER_OWN_QUESTIONS_REQUEST:
      return action.topicID
    default:
      return state
  }
}
export const myQuestionsSearchQuery = (state = '', action) => {
  switch (action.type) {
    case SEARCH_USER_OWN_QUESTIONS_REQUEST:
      return action.query
    default:
      return state
  }
}

export const getUserOwnQuestionsLoadingMore = (state = false, action) => {
  switch (action.type) {
    case 'getUserOwnQuestionsLoadingMore':
      return action.isLoading
    default:
      return state
  }
}
export const getUserOwnQuestionsNoMore = (state = false, action) => {
  switch (action.type) {
    case 'getUserOwnQuestionsNoMore':
      return action.isNoMore
    default:
      return state
  }
}