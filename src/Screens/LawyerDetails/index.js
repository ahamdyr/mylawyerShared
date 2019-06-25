import LawyerDetails from './LawyerDetails'
import {connect} from 'react-redux'
import {
  getLawyerDetailsRequest
} from '../../Redux/LawyerDetails/actions'

const mapStateToProps =  state => ({
  getLawyerDetailsSuccess: state.getLawyerDetailsSuccess,
  getLawyerDetailsLoading: state.getLawyerDetailsLoading,
  currentUser: state.currentUser
})

  
const mapDispatchersToProps = dispatch => ({
  getLawyerDetailsRequest: (lawyerID) => dispatch(getLawyerDetailsRequest(lawyerID))
})


export default connect(mapStateToProps, mapDispatchersToProps)(LawyerDetails)