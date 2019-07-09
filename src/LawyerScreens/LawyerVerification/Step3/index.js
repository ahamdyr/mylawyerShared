import Step3 from './Step3'
import {connect} from 'react-redux'
import {
  addFirmPaper, deleteFirmPaper
} from '../../../Redux/LawyerVerification/actions'

const mapStateToProps =  state => ({
  firmPapers: state.firmPapers
})

const mapDispatchersToProps = dispatch => ({
  addFirmPaper: (firmPaper) => dispatch(addFirmPaper(firmPaper)),
  deleteFirmPaper: (firmPaper) => dispatch(deleteFirmPaper(firmPaper)),
})  
export default connect(mapStateToProps, mapDispatchersToProps)(Step3)