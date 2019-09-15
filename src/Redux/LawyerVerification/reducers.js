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

export const lawyerIDs = (state = [], action) => {
  switch (action.type) {
    case 'addLawyerID':
      return [...state, action.lawyerID]
    case 'deleteLawyerID':
      return state.filter(e=> e.uuid !== action.lawyerID.uuid )  
    case 'clearLawyerID':
      return []    
    default:
      return state
  }
}

export const firmPapers = (state = [], action) => {
  switch (action.type) {
    case 'addFirmPaper':
      return [...state, action.firmPaper]
    case 'deleteFirmPaper':
      return state.filter(e=> e.uuid !== action.firmPaper.uuid )  
    case 'clearFirmPaper':
      return []    
    default:
      return state
  }
}