import LawyersScreen from './LawyersScreen'
import {connect} from 'react-redux'
import {
  getLawyersRequest,
  //getLawyersSuccess
} from '../../Redux/LawyersList/actions'

const mapStateToProps =  state => ({
  getLawyersSuccess: state.getLawyersSuccess,
  getLawyersLoading: state.getLawyersLoading
})

const mapDispatchersToProps = dispatch => ({
  getLawyersRequest: () => dispatch(getLawyersRequest()),
  //getLawyersSuccess: ()=> dispatch(getLawyersSuccess())
})  
export default connect(mapStateToProps, mapDispatchersToProps)(LawyersScreen)