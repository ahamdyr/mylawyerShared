import MajorsScreen from './MajorsScreen'
import {connect} from 'react-redux'
import {
  getMajorsRequest
} from '../../Redux/MajorsList/actions'

const mapStateToProps =  state => ({
  getMajorsSuccess: state.getMajorsSuccess,
  //getMajorsLoading: state.getMajorsLoading
})

const mapDispatchersToProps = dispatch => ({
  getMajorsRequest: () => dispatch(getMajorsRequest()),
  //getLawyersSuccess: ()=> dispatch(getLawyersSuccess())
})  
export default connect(mapStateToProps, mapDispatchersToProps)(MajorsScreen)