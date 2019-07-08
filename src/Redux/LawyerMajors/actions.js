
export const getMajorsRequest = () => {
  return{
    type: 'getMajorsRequest'
  }
}

export const getMajorsSuccess = (majors) => {
  return{
    type: 'getMajorsSuccess',
    majors
  }
}

export const getMajorsLoading = (isLoading) => {
  return{
    type: 'getMajorsLoading',
    isLoading
  }
}

// export const MajorsPageToken = (pageToken) => {
//   return{
//     type: Majors_PAGE_TOKEN,
//     pageToken
//   }
// }