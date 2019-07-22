
export const clearContactUsData = (state = false, action) => {
  switch (action.type) {
    case 'clearContactUsData':
      return action.bool
    default:
      return state
  }
}