import {
  GET_LAWYERS_ERROR,
  GET_LAWYERS_LOADING,
  GET_LAWYERS_SUCCESS,
  SET_LAWYERS_PG_TOKEN  
} from './actions'

export const getLawyersSuccess = (state = [], action) => {
  switch (action.type) {
    case GET_LAWYERS_SUCCESS:
      return [...state, ...action.lawyers] 
    default:
      return state
  }
}

export const getLawyersLoading = (state = false, action) => {
  switch (action.type) {
    case GET_LAWYERS_LOADING:
      return action.isLoading
    default:
      return state
  }
}

export const getLawyersError = (state = '', action) => {
  switch (action.type) {
    case GET_LAWYERS_ERROR:
      return action.error
    default:
      return state
  }
}

export const lawyersPageToken = (state = '', action) => {
  switch (action.type) {
    case SET_LAWYERS_PG_TOKEN:
      return action.pageToken
    default:
      return state
  }
}