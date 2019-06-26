import {
  GET_USER_OWN_QUESTIONS_ERROR,
  GET_USER_OWN_QUESTIONS_LOADING,
  GET_USER_OWN_QUESTIONS_SUCCESS,
  SET_USER_OWN_QUESTIONS_PG_TOKEN
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
    default:
      return state
  }
}