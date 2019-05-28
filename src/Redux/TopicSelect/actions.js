export const GET_TOPICS_REQUEST = 'GET_TOPICS_REQUEST'
export const GET_TOPICS_SUCCESS = 'GET_TOPICS_SUCCESS'
export const GET_TOPICS_LOADING = 'GET_TOPICS_LOADING'
export const TOPICS_PAGE_TOKEN = 'TOPICS_PAGE_TOKEN'
// export const SELECT_ASK_TOPIC = 'SELECT_ASK_TOPIC'
// export const SELECT_MY_QUESTIONS_TOPIC = 'SELECT_MY_QUESTIONS_TOPIC'
// export const SELECT_ALL_QUESTIONS_TOPIC = 'SELECT_ALL_QUESTIONS_TOPIC'

export const getTopicsRequest = () => {
  return{
    type: GET_TOPICS_REQUEST
  }
}

export const getTopicsSuccess = (topics) => {
  return{
    type: GET_TOPICS_SUCCESS,
    topics
  }
}

export const getTopicsLoading = (isLoading) => {
  return{
    type: GET_TOPICS_LOADING,
    isLoading
  }
}

export const topicsPageToken = (pageToken) => {
  return{
    type: TOPICS_PAGE_TOKEN,
    pageToken
  }
}

// export const selectAskTopic = (topic) => {
//   return{
//     type: SELECT_ASK_TOPIC,
//     topic
//   }
// }

// export const selectMyQuestionsTopic = (topic) => {
//   return{
//     type: SELECT_MY_QUESTIONS_TOPIC,
//     topic
//   }
// }

// export const selectAllQuestionsTopic = (topic) => {
//   return{
//     type: SELECT_ALL_QUESTIONS_TOPIC,
//     topic
//   }
// }