export const setLawyerMajor = (major) => {
  return{
    type: 'setLawyerMajor',
    major
  }
}

export const addQuestionLoading = (isLoading) => {
  return{
    type: ADD_QUESTION_LOADING,
    isLoading
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

export const deleteAttachments = () => {
  return{
    type: 'deleteAttachments'
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

export const addAnswer = (answer) => {
  return{
    type: ADD_ANSWER,
    answer
  }
}

export const addAttachs = (attachs) => {
  return{
    type: ADD_ATTACHS,
    attachs
  }
}
export const clearQuestion = (bool) => {
  return{
    type: 'clearQuestion',
    bool
  }
}


