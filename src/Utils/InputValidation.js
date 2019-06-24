export const isValidEmailAddress = (email) => {
  var pattern = /.+\@.+\..+/;
  return pattern.test(email);
}

export const isValidPhoneNumber = (phoneNumber) => {
  
}