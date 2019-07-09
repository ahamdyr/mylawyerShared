import Step2 from './Step2'
import {connect} from 'react-redux'
import { 
  addLawyerID, deleteLawyerID 
} from '../../../Redux/LawyerVerification/actions'

const mapStateToProps =  state => ({
  lawyerIDs: state.lawyerIDs
})

const mapDispatchersToProps = dispatch => ({
  addLawyerID: (lawyerID) => dispatch(addLawyerID(lawyerID)),
  deleteLawyerID: (lawyerID) => dispatch(deleteLawyerID(lawyerID)),
})  
export default connect(mapStateToProps, mapDispatchersToProps)(Step2)