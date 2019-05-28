export const isValidEmailAddress = (email) => {
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(email);
}

export const isValidPhoneNumber = (phoneNumber) => {
  
}