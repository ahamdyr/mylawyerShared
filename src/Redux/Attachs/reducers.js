import {
  ATTACHS_PAGE_TOKEN,
  GET_ATTACHS_LOADING,
  GET_ATTACHS_SUCCESS
} from './actions'
import { mockTopics } from '../../Services/BackendServices/MockData'

export const getAttachsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_ATTACHS_SUCCESS:
      return action.attachs
    default:
      return state
  }
}

export const getAttachsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_ATTACHS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const attachsPageToken = (state = '', action) => {
  switch (action.type) {
    case ATTACHS_PAGE_TOKEN:
      return action.pageToken
    default:
      return state
  }
}