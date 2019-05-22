export const qTitle = (state = '', action) => {
  switch (action.type) {
    case 'setQTitle':
      return action.title
    default:
      return state
  }
}

export const qBody = (state = '', action) => {
  switch (action.type) {
    case 'setQBody':
      return action.body
    default:
      return state
  }
}

export const qFiles = (state = [], action) => {
  switch (action.type) {
    case 'setQFiles':
      return [...state, action.files]
    default:
      return state
  }
}

export const qImages = (state = [], action) => {
  switch (action.type) {
    case 'setQImages':
      return [...state, action.images]
    default:
      return state
  }
}

export const questions = (state = [], action) => {
  switch (action.type) {
    case 'submitQ':
      return [...state, action.question]
    default:
      return state
  }
}