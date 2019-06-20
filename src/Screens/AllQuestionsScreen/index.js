import AllQuestionsScreen from './AllQuestionsScreen'
import {connect} from 'react-redux'
// import {
//   getLawyersRequest
// } from '../../Redux/LawyersList/actions'

const mapStateToProps =  state => ({
  questions: state.questions
})

const mapDispatchersToProps = dispatch => ({
  //getLawyersRequest: () => dispatch(getLawyersRequest()),
})  
export default connect(mapStateToProps, mapDispatchersToProps)(AllQuestionsScreen)