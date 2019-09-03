
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

export const getMajorsError = (error) => {
  return{
    type: 'getMajorsError',
    error
  }
}

export const getMajorsLoading = (isLoading) => {
  return{
    type: 'getMajorsLoading',
    isLoading
  }
}