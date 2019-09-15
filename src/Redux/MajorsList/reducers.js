
import { mockLawyersList } from '../../Services/BackendServices/MockData'
export const getMajorsSuccess = (state = [], action) => {
  switch (action.type) {
    case 'getMajorsSuccess':
      return action.majors
    default:
      return state
  }
}

export const getMajorsLoading = (state = false, action) => {
  switch (action.type) {
    case 'getMajorsLoading':
      return action.isLoading
    default:
      return state
  }
}

export const getMajorsError = (state = '', action) => {
  switch (action.type) {
    case 'getMajorsError':
      return action.error
    default:
      return state
  }
}