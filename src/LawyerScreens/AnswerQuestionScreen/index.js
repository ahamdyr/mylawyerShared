import AnswerQuestionScreen from './AnswerQuestionScreen'
import {connect} from 'react-redux'
import { getAnswersRequest } from '../../Redux/Answers/actions' 
import { getAttachsRequest } from '../../Redux/Attachs/actions' 

const mapStateToProps =  state => ({
  isLoggedUser: state.isLoggedUser,
  // answers: state.answers,
  // attachs: state.attachs,
  answers: state.getAnswersSuccess,
  answersLoading: state.getAnswersLoading,
  attachs: state.getAttachsSuccess,
  attachsLoading: state.getAttachsLoading
})

  
const mapDispatchersToProps = dispatch => ({
  getAnswersRequest: (id) => dispatch(getAnswersRequest(id)),
  getAttachsRequest: (id) => dispatch(getAttachsRequest(id))
})


export default connect(mapStateToProps, mapDispatchersToProps)(AnswerQuestionScreen)