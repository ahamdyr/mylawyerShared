import { 
  PhoneNumberUtil
} from 'google-libphonenumber'


export const isValidEmailAddress = (email) => {
  var pattern = /.+\@.+\..+/;
  return pattern.test(email);
}

export const isValidPhoneNumber = (phoneNumber) => {
  try {
    var phoneUtil = PhoneNumberUtil.getInstance()
    var parsedNumber = phoneUtil.parse(phoneNumber)
    return phoneUtil.isValidNumber(parsedNumber)    
  } catch (error) {
    return false
  }
}