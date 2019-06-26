import {
  ANSWERS_PAGE_TOKEN,
  GET_ANSWERS_LOADING,
  GET_ANSWERS_SUCCESS
} from './actions'
import { mockTopics } from '../../Services/BackendServices/MockData'

export const getAnswersSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_ANSWERS_SUCCESS:
      return action.answers
    default:
      return state
  }
}

export const getAnswersLoading = (state = false, action) => {
  switch (action.type) {
    case GET_ANSWERS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const answersPageToken = (state = '', action) => {
  switch (action.type) {
    case ANSWERS_PAGE_TOKEN:
      return action.pageToken
    default:
      return state
  }
}