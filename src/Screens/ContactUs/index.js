import ContactUs from './ContactUs'
import {connect} from 'react-redux'
import {
  submitMessage
} from '../../Redux/ContactUs/actions'

const mapStateToProps =  state => ({
  clear: state.clearContactUsData
})

  
const mapDispatchersToProps = dispatch => ({
  submitMessage : (email, body) => dispatch(submitMessage(email, body))
})


export default connect(mapStateToProps, mapDispatchersToProps)(ContactUs)