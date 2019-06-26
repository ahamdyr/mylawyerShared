import MyQuestionsScreen from './MyQuestionsScreen'
import {connect} from 'react-redux'
import {
  getUserOwnQuestionsRequest,
  searchUserOwnQuestionsRequest,
  filterUserOwnQuestionsRequest
} from '../../Redux/UserOwnQuests/actions'

const mapStateToProps =  state => ({
  currentUser: state.currentUser,
  accessToken: state.accessToken,
  isLoggedUser: state.isLoggedUser,
  questions: state.questions,
  getUserOwnQuestionsSuccess: state.getUserOwnQuestionsSuccess,
  getUserOwnQuestionsLoading: state.getUserOwnQuestionsLoading
})

const mapDispatchersToProps = dispatch => ({
  getUserOwnQuestionsRequest: (accessToken) => dispatch(getUserOwnQuestionsRequest(accessToken)),
  searchUserOwnQuestionsRequest: (accessToken, query) => dispatch(searchUserOwnQuestionsRequest(accessToken, query)),
  filterUserOwnQuestionsRequest: (accessToken, topicID)=>dispatch(filterUserOwnQuestionsRequest(accessToken, topicID)) 
})  
export default connect(mapStateToProps, mapDispatchersToProps)(MyQuestionsScreen)