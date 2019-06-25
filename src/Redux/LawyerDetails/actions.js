export const GET_LAWYER_DETAILS_REQUEST = 'GET_LAWYER_DETAILS_REQUEST'
export const GET_LAWYER_DETAILS_SUCCESS = 'GET_LAWYER_DETAILS_SUCCESS'
export const GET_LAWYER_DETAILS_LOADING = 'GET_LAWYER_DETAILS_LOADING'
export const GET_LAWYER_DETAILS_ERROR = 'GET_LAWYER_DETAILS_ERROR'
//export const SET_LAWYERS_PG_TOKEN = 'SET_LAWYERS_PG_TOKEN'

export const getLawyerDetailsRequest = (lawyerID) => {
  return{
    type: GET_LAWYER_DETAILS_REQUEST,
    lawyerID
  }
}

export const getLawyerDetailsSuccess = (lawyer) => {
  return{
    type: GET_LAWYER_DETAILS_SUCCESS,
    lawyer
  }
}

export const getLawyerDetailsError = (error) => {
  return{
    type: GET_LAWYER_DETAILS_ERROR,
    error
  }
}

export const getLawyerDetailsLoading = (isLoading) => {
  return{
    type: GET_LAWYER_DETAILS_LOADING,
    isLoading
  }
}

// export const setLawyersPageToken = (pageToken) => {
//   return{
//     type: SET_LAWYERS_PG_TOKEN,
//     pageToken
//   }
// }