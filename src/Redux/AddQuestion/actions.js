export const SET_QUESTION_TITLE = 'SET_QUESTION_TITLE'
export const SET_QUESTION_BODY = 'SET_QUESTION_BODY'
export const SET_QUESTION_DOC = 'SET_QUESTION_DOC'
export const DEL_QUESTION_DOC = 'DEL_QUESTION_DOC'
export const SET_QUESTION_IMG = 'SET_QUESTION_IMG'
export const DEL_QUESTION_IMG = 'DEL_QUESTION_IMG'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SET_QUESTION_TOPIC = 'SET_QUESTION_TOPIC'

export const setQuestionTopic = (topic) => {
  return{
    type: SET_QUESTION_TOPIC,
    topic
  }
}

export const setQuestionTitle = (title) => {
  return{
    type: SET_QUESTION_TITLE,
    title
  }
}

export const setQuestionBody = (body) => {
  return{
    type: SET_QUESTION_BODY,
    body
  }
}

export const setQuestionDoc = (doc) => {
  return{
    type: SET_QUESTION_DOC,
    doc
  }
}

export const delQuestionDoc = (doc) => {
  return{
    type: DEL_QUESTION_DOC,
    doc
  }
}

export const setQuestionImg = (img) => {
  return{
    type: SET_QUESTION_IMG,
    img
  }
}

export const delQuestionImg = (img) => {
  return{
    type: DEL_QUESTION_IMG,
    img
  }
}

export const submitQuestion = () =>{
  return{
    type: SUBMIT_QUESTION
  }
}

export const addQuestion = (question) =>{
  return{
    type: ADD_QUESTION,
    question
  }
}