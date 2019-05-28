import {
  GET_TOPICS_LOADING,
  GET_TOPICS_SUCCESS,
  // SELECT_ASK_TOPIC
} from './actions'

export const getTopicsSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_TOPICS_SUCCESS:
      return action.topics
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

// export const askTopic = (state = {}, action) => {
//   switch (action.type) {
//     case SELECT_ASK_TOPIC:
//       return action.topic
//     default:
//       return state
//   }
// }