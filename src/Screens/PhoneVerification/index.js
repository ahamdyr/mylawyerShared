import { connect } from 'react-redux'
import PhoneVerification from './PhoneVerification'

const mapStateToProps =  state => ({
  phoneNumber : state.userPhoneNumber,
  countryCode: state.countryCode,
  userName : state.userName
})

  
const mapDispatchersToProps = dispatch => ({
  
})



export default connect(mapStateToProps,mapDispatchersToProps)(PhoneVerification)
