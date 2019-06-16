import {
  DEL_QUESTION_DOC,
  DEL_QUESTION_IMG,
  SET_QUESTION_BODY,
  SET_QUESTION_DOC,
  SET_QUESTION_IMG,
  SET_QUESTION_TITLE,
  ADD_QUESTION,
  SET_QUESTION_TOPIC
} from './actions'

export const questionTopic = (state = {}, action) => {
  switch (action.type) {
    case SET_QUESTION_TOPIC:
      return action.topic
    default:
      return state
  }
}

export const questionTitle = (state = '', action) => {
  switch (action.type) {
    case SET_QUESTION_TITLE:
      return action.title
    default:
      return state
  }
}

export const questionBody = (state = '', action) => {
  switch (action.type) {
    case SET_QUESTION_BODY:
      return action.body
    default:
      return state
  }
}

export const questionDocs = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTION_DOC:
      return [...state, action.doc]
    case DEL_QUESTION_DOC:
      return state.filter(e=> e.uuid !== action.doc.uuid )  
    default:
      return state
  }
}

export const questionImgs = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTION_IMG:
      return [...state, action.img]
    case DEL_QUESTION_IMG:
      return state.filter(e => e.uuid !== action.img.uuid)
    default:
      return state
  }
}

export const questions = (state = [], action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return [...state, action.question]
    default:
      return state
  }
}