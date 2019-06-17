export const questionTopic = (state = '', action) => {
  switch (action.type) {
    case SET_QUESTION_TOPIC:
      return action.topic
    default:
      return state
  }
}