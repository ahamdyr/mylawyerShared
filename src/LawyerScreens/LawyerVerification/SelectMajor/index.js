import SelectMajor from './SelectMajor'
import {connect} from 'react-redux'
import { getMajorsRequest } from '../../../Redux/LawyerMajors/actions'

const mapStateToProps =  state => ({
  getMajorsSuccess: state.getMajorsSuccess,
  getMajorsLoading: state.getMajorsLoading
})

const mapDispatchersToProps = dispatch => ({
  getMajorsRequest: () => dispatch(getMajorsRequest()),
})  
export default connect(mapStateToProps, mapDispatchersToProps)(SelectMajor)