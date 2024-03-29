import AskQuestion from './AskQuestionScreen'
import {connect} from 'react-redux'
import {
  setQuestionBody,
  setQuestionDoc,
  setQuestionImg,
  setQuestionTitle,
  submitQuestion,
  delQuestionDoc,
  delQuestionImg,
  setQuestionTopic
} from '../../Redux/AddQuestion/actions'

const mapStateToProps =  state => ({
  docs : state.questionDocs,
  imgs: state.questionImgs,
  isLoggedUser: state.isLoggedUser,
  currentUser: state.currentUser,
  questionTitle: state.questionTitle,
  questionBody: state.questionBody,
  questionTopic: state.questionTopic,
  addQuestionLoading: state.addQuestionLoading,
  clearQuestion: state.clearQuestion
})

  
const mapDispatchersToProps = dispatch => ({
  setQuestionBody: (body) => dispatch(setQuestionBody(body)),
  setQuestionTitle: (title) => dispatch(setQuestionTitle(title)),
  setQuestionDoc: (doc) => dispatch(setQuestionDoc(doc)),
  setQuestionImg: (img) => dispatch(setQuestionImg(img)),
  delQuestionDoc: (doc) => dispatch(delQuestionDoc(doc)),
  delQuestionImg: (img) => dispatch(delQuestionImg(img)),
  submitQuestion: (assignedTo) => dispatch(submitQuestion(assignedTo)),
  setQuestionTopic: (topic) => dispatch(setQuestionTopic(topic))
})


export default connect(mapStateToProps, mapDispatchersToProps)(AskQuestion)