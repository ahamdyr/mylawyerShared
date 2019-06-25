import LawyersScreen from './LawyersScreen'
import {connect} from 'react-redux'
import {
  getLawyersRequest
} from '../../Redux/LawyersList/actions'

const mapStateToProps =  state => ({
  getLawyersSuccess: state.getLawyersSuccess,
  getLawyersLoading: state.getLawyersLoading
})

const mapDispatchersToProps = dispatch => ({
  getLawyersRequest: () => dispatch(getLawyersRequest()),
})  
export default connect(mapStateToProps, mapDispatchersToProps)(LawyersScreen)