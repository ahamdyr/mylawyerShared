import AllQuestionsScreen from './AllQuestionsScreen'
import {connect} from 'react-redux'
import {
  getUserAllQuestionsRequest,
  searchUserAllQuestionsRequest
} from '../../Redux/UserAllQuests/actions'

const mapStateToProps =  state => ({
  questions: state.questions,
  getUserAllQuestionsSuccess: state.getUserAllQuestionsSuccess,
  getUserAllQuestionsLoading: state.getUserAllQuestionsLoading,

})

const mapDispatchersToProps = dispatch => ({
  getUserAllQuestionsRequest: () => dispatch(getUserAllQuestionsRequest()),
  searchUserAllQuestionsRequest: (query) => dispatch(searchUserAllQuestionsRequest(query))
})  
export default connect(mapStateToProps, mapDispatchersToProps)(AllQuestionsScreen)