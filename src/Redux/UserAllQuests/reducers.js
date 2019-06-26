import {
  GET_USER_ALL_QUESTIONS_ERROR,
  GET_USER_ALL_QUESTIONS_LOADING,
  GET_USER_ALL_QUESTIONS_SUCCESS,
  SET_USER_ALL_QUESTIONS_PG_TOKEN
} from './actions'

import { mockAllQuestions } from '../../Services/BackendServices/MockData'

export const getUserAllQuestionsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_USER_ALL_QUESTIONS_SUCCESS:
      return action.questions 
    default:
      return state
  }
}

export const getUserAllQuestionsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_USER_ALL_QUESTIONS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const getUserAllQuestionsError = (state = '', action) => {
  switch (action.type) {
    case GET_USER_ALL_QUESTIONS_ERROR:
      return action.error
    default:
      return state
  }
}

export const UserAllQuestionsPageToken = (state = '', action) => {
  switch (action.type) {
    case SET_USER_ALL_QUESTIONS_PG_TOKEN:
      return action.pageToken
    default:
      return state
  }
}