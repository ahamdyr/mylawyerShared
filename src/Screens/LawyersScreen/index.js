import LawyersScreen from './LawyersScreen'
import {connect} from 'react-redux'
import {
  getLawyersRequest,
  getLawyersSuccess
} from '../../Redux/LawyersList/actions'

const mapStateToProps =  state => ({
  lawyers: state.getLawyersSuccess,
  getLawyersLoading: state.getLawyersLoading
})

const mapDispatchersToProps = dispatch => ({
  getLawyersRequest: (majorId) => dispatch(getLawyersRequest(majorId)),
  getLawyersSuccess: (lawyers)=> dispatch(getLawyersSuccess(lawyers))
})  
export default connect(mapStateToProps, mapDispatchersToProps)(LawyersScreen)