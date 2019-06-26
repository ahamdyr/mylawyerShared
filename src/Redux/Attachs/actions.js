export const GET_ATTACHS_REQUEST = 'GET_ATTACHS_REQUEST'
export const GET_ATTACHS_SUCCESS = 'GET_ATTACHS_SUCCESS'
export const GET_ATTACHS_LOADING = 'GET_ATTACHS_LOADING'
export const ATTACHS_PAGE_TOKEN = 'ATTACHS_PAGE_TOKEN'

export const getAttachsRequest = (questionID) => {
  return{
    type: GET_ATTACHS_REQUEST,
    questionID
  }
}

export const getAttachsSuccess = (attachs) => {
  return{
    type: GET_ATTACHS_SUCCESS,
    attachs
  }
}

export const getAttachsLoading = (isLoading) => {
  return{
    type: GET_ATTACHS_LOADING,
    isLoading
  }
}

export const attachsPageToken = (pageToken) => {
  return{
    type: ATTACHS_PAGE_TOKEN,
    pageToken
  }
}