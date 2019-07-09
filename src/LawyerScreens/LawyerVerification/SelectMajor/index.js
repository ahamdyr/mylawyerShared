import SelectMajor from './SelectMajor'
import {connect} from 'react-redux'
import { getMajorsRequest } from '../../../Redux/LawyerMajors/actions'
import { setLawyerMajor } from '../../../Redux/LawyerVerification/actions'


const mapStateToProps =  state => ({
  getMajorsSuccess: state.getMajorsSuccess,
  getMajorsLoading: state.getMajorsLoading,
  lawyerMajor: state.lawyerMajor  
})

const mapDispatchersToProps = dispatch => ({
  getMajorsRequest: () => dispatch(getMajorsRequest()),
  setLawyerMajor: (major) => dispatch(setLawyerMajor(major))
})  
export default connect(mapStateToProps, mapDispatchersToProps)(SelectMajor)