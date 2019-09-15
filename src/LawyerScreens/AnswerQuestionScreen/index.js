import AnswerQuestionScreen from './AnswerQuestionScreen'
import {connect} from 'react-redux'
import { getAnswersRequest } from '../../Redux/Answers/actions' 
import { getAttachsRequest } from '../../Redux/Attachs/actions' 
import {
  setQuestionDoc,
  setQuestionImg,
  delQuestionDoc,
  delQuestionImg
} from '../../Redux/AddQuestion/actions'

const mapStateToProps =  state => ({
  isLoggedUser: state.isLoggedUser,
  accessToken: state.accessToken,
  // answers: state.answers,
  // attachs: state.attachs,
  docs : state.questionDocs,
  imgs: state.questionImgs,
  // answers: state.getAnswersSuccess,
  // answersLoading: state.getAnswersLoading,
  attachs: state.getAttachsSuccess,
  attachsLoading: state.getAttachsLoading
})

  
const mapDispatchersToProps = dispatch => ({
  //getAnswersRequest: (id) => dispatch(getAnswersRequest(id)),
  getAttachsRequest: (id) => dispatch(getAttachsRequest(id)),
  setQuestionDoc: (doc) => dispatch(setQuestionDoc(doc)),
  setQuestionImg: (img) => dispatch(setQuestionImg(img)),
  delQuestionDoc: (doc) => dispatch(delQuestionDoc(doc)),
  delQuestionImg: (img) => dispatch(delQuestionImg(img)),
})


export default connect(mapStateToProps, mapDispatchersToProps)(AnswerQuestionScreen)