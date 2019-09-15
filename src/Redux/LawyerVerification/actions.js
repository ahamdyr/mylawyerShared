export const setLawyerMajor = (major) => {
  return{
    type: 'setLawyerMajor',
    major
  }
}
////////////////////////////////////////////////////////////////////////
export const addLawyerID = (lawyerID) => {
  return{
    type: 'addLawyerID',
    lawyerID
  }
}

export const deleteLawyerID = (lawyerID) => {
  return{
    type: 'deleteLawyerID',
    lawyerID
  }
}

export const clearLawyerID = () => {
  return{
    type: 'clearLawyerID'
  }
}
///////////////////////////////////////////////////////////////////////////////
export const addFirmPaper = (firmPaper) => {
  return{
    type: 'addFirmPaper',
    firmPaper
  }
}

export const deleteFirmPaper = (firmPaper) => {
  return{
    type: 'deleteFirmPaper',
    firmPaper
  }
}

export const clearFirmPaper = () => {
  return{
    type: 'clearFirmPaper'
  }
}


