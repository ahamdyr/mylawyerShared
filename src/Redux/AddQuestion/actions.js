export const setQTitle = (title) => {
  return{
    type: 'setQTitle',
    title
  }
}

export const setQBody = (body) => {
  return{
    type: 'setQBody',
    body
  }
}

export const setQFiles = (files) => {
  return{
    type: 'setQFiles',
    files
  }
}

export const setQImages = (images) => {
  return{
    type: 'setQImages',
    images
  }
}

export const submitQ = () =>{
  return{
    type: 'submitQ'
  }
}

