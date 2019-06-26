import {
  GET_TOPICS_LOADING,
  GET_TOPICS_SUCCESS,
  TOPICS_PAGE_TOKEN
  // SELECT_ASK_TOPIC
} from './actions'
import { mockTopics } from '../../Services/BackendServices/MockData'
export const getTopicsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_TOPICS_SUCCESS:
      return [...action.topics, ...state]
    default:
      return state
  }
}

export const getTopicsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_TOPICS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const topicsPageToken = (state = '', action) => {
  switch (action.type) {
    case TOPICS_PAGE_TOKEN:
      return action.pageToken
    default:
      return state
  }
}
// export const askTopic = (state = {}, action) => {
//   switch (action.type) {
//     case SELECT_ASK_TOPIC:
//       return action.topic
//     default:
//       return state
//   }
// }