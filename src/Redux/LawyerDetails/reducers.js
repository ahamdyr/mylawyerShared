import {
  GET_LAWYER_DETAILS_ERROR,
  GET_LAWYER_DETAILS_LOADING,
  GET_LAWYER_DETAILS_SUCCESS
} from './actions'

export const getLawyerDetailsSuccess = (state = {}, action) => {
  switch (action.type) {
    case GET_LAWYER_DETAILS_SUCCESS:
      return action.lawyer
    default:
      return state
  }
}

export const getLawyerDetailsLoading = (state = false, action) => {
  switch (action.type) {
    case GET_LAWYER_DETAILS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const getLawyerDetailsError = (state = '', action) => {
  switch (action.type) {
    case GET_LAWYER_DETAILS_ERROR:
      return action.error
    default:
      return state
  }
}
