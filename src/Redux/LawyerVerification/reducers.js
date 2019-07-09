import { 
  mockAllQuestions,
  mockAnswers,
  mockAttachs 
} from '../../Services/BackendServices/MockData'

export const lawyerMajor = (state = {}, action) => {
  switch (action.type) {
    case 'setLawyerMajor':
      return action.major
    default:
      return state
  }
}

// export const clearQuestion = (state = false, action) => {
//   switch (action.type) {
//     case 'clearQuestion':
//       return action.bool
//     default:
//       return state
//   }
// }

// export const addQuestionLoading = (state = false, action) => {
//   switch (action.type) {
//     case ADD_QUESTION_LOADING:
//       return action.isLoading
//     default:
//       return state
//   }
// }

// export const questionTitle = (state = '', action) => {
//   switch (action.type) {
//     case SET_QUESTION_TITLE:
//       return action.title
//     default:
//       return state
//   }
// }

// export const questionBody = (state = '', action) => {
//   switch (action.type) {
//     case SET_QUESTION_BODY:
//       return action.body
//     default:
//       return state
//   }
// }

// export const questionDocs = (state = [], action) => {
//   switch (action.type) {
//     case SET_QUESTION_DOC:
//       return [...state, action.doc]
//     case DEL_QUESTION_DOC:
//       return state.filter(e=> e.uuid !== action.doc.uuid )  
//     case 'deleteAttachments':
//       return []    
//     default:
//       return state
//   }
// }

// export const questionImgs = (state = [], action) => {
//   switch (action.type) {
//     case SET_QUESTION_IMG:
//       return [...state, action.img]
//     case DEL_QUESTION_IMG:
//       return state.filter(e => e.uuid !== action.img.uuid)
//     case 'deleteAttachments':
//       return []
//     default:
//       return state
//   }
// }

// export const questions = (state = mockAllQuestions, action) => {
//   switch (action.type) {
//     case ADD_QUESTION:
//       return [action.question, ...state ]
//     default:
//       return state
//   }
// }

// export const answers = (state = mockAnswers, action) => {
//   switch (action.type) {
//     case ADD_ANSWER:
//       return [...state, action.answer]
//     default:
//       return state
//   }
// }

// export const attachs = (state = mockAttachs, action) => {
//   switch (action.type) {
//     case ADD_ATTACHS:
//       return Object.assign(state, action.attachs)
//     default:
//       return state
//   }
// }