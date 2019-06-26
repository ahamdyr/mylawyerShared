export const GET_LAWYERS_REQUEST = 'GET_LAWYERS_REQUEST'
export const SEARCH_LAWYERS_REQUEST = 'SEARCH_LAWYERS_REQUEST'
export const GET_LAWYERS_SUCCESS = 'GET_LAWYERS_SUCCESS'
export const GET_LAWYERS_LOADING = 'GET_LAWYERS_LOADING'
export const GET_LAWYERS_ERROR = 'GET_LAWYERS_ERROR'
export const SET_LAWYERS_PG_TOKEN = 'SET_LAWYERS_PG_TOKEN'

export const getLawyersRequest = () => {
  return{
    type: GET_LAWYERS_REQUEST
  }
}
export const searchLawyersRequest = (query) => {
  return{
    type: SEARCH_LAWYERS_REQUEST,
    query
  }
}

export const getLawyersSuccess = (lawyers) => {
  return{
    type: GET_LAWYERS_SUCCESS,
    lawyers
  }
}

export const getLawyersError = (error) => {
  return{
    type: GET_LAWYERS_ERROR,
    error
  }
}

export const getLawyersLoading = (isLoading) => {
  return{
    type: GET_LAWYERS_LOADING,
    isLoading
  }
}

export const setLawyersPageToken = (pageToken) => {
  return{
    type: SET_LAWYERS_PG_TOKEN,
    pageToken
  }
}