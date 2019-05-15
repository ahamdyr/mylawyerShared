import {
  OPEN_SOCIAL_MODAL,
  CLOSE_SOCIAL_MODAL
} from './actions'

export const socialModalOpen = (state = false, action) => {
  switch (action.type) {
    case OPEN_SOCIAL_MODAL:
      return true
    case CLOSE_SOCIAL_MODAL:
      return false  
    default:
      return state
  }
}