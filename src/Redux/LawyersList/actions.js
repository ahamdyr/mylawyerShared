export const GET_LAWYERS_REQUEST = 'GET_LAWYERS_REQUEST'
export const GET_LAWYERS_SUCCESS = 'GET_LAWYERS_SUCCESS'
export const GET_LAWYERS_LOADING = 'GET_LAWYERS_LOADING'
export const GET_LAWYERS_ERROR = 'GET_LAWYERS_ERROR'
export const SET_LAWYERS_PG_TOKEN = 'SET_LAWYERS_PG_TOKEN'

export const getLawyersRequest = () => {
  return{
    type: GET_LAWYERS_REQUEST
  }
}