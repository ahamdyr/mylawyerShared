export const setLawyerMajor = (major) => {
  return{
    type: 'setLawyerMajor',
    major
  }
}
////////////////////////////////////////////////////////////////////////
export const addLawyerID = (lawyerID) => {
  return{
    type: 'addLawyerID',
    lawyerID
  }
}

export const deleteLawyerID = (lawyerID) => {
  return{
    type: 'deleteLawyerID',
    lawyerID
  }
}

export const clearLawyerID = () => {
  return{
    type: 'clearLawyerID'
  }
}
///////////////////////////////////////////////////////////////////////////////
export const addFirmPaper = (firmPaper) => {
  return{
    type: 'addFirmPaper',
    firmPaper
  }
}

export const deleteFirmPaper = (firmPaper) => {
  return{
    type: 'deleteFirmPaper',
    firmPaper
  }
}

export const clearFirmPaper = () => {
  return{
    type: 'clearFirmPaper'
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
// export const addQuestionLoading = (isLoading) => {
//   return{
//     type: ADD_QUESTION_LOADING,
//     isLoading
//   }
// }

// export const setQuestionTitle = (title) => {
//   return{
//     type: SET_QUESTION_TITLE,
//     title
//   }
// }

// export const setQuestionBody = (body) => {
//   return{
//     type: SET_QUESTION_BODY,
//     body
//   }
// }

// export const setQuestionImg = (img) => {
//   return{
//     type: SET_QUESTION_IMG,
//     img
//   }
// }
// export const delQuestionImg = (img) => {
//   return{
//     type: DEL_QUESTION_IMG,
//     img
//   }
// }
// export const deleteAttachments = () => {
//   return{
//     type: 'deleteAttachments'
//   }
// }


// export const submitQuestion = () =>{
//   return{
//     type: SUBMIT_QUESTION
//   }
// }

// export const addQuestion = (question) =>{
//   return{
//     type: ADD_QUESTION,
//     question
//   }
// }

// export const addAnswer = (answer) => {
//   return{
//     type: ADD_ANSWER,
//     answer
//   }
// }

// export const addAttachs = (attachs) => {
//   return{
//     type: ADD_ATTACHS,
//     attachs
//   }
// }
// export const clearQuestion = (bool) => {
//   return{
//     type: 'clearQuestion',
//     bool
//   }
// }


