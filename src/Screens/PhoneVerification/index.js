import { connect } from 'react-redux'
import PhoneVerification from './PhoneVerification'

const mapStateToProps =  state => ({
  phoneNumber : state.userPhoneNumber,
  userName : state.userName
})

  
const mapDispatchersToProps = dispatch => ({
  
})



export default connect(mapStateToProps,mapDispatchersToProps)(PhoneVerification)
