import MyQuestionsScreen from './MyQuestionsScreen'
import {connect} from 'react-redux'
import {
  getUserOwnQuestionsRequest,
  searchUserOwnQuestionsRequest,
  filterUserOwnQuestionsRequest,
  getUserOwnQuestionsLoadMore
} from '../../Redux/UserOwnQuests/actions'

const mapStateToProps =  state => ({
  //questions: state.questions,
  questions: state.getUserOwnQuestionsSuccess,
  questionsLoading: state.getUserOwnQuestionsLoading,
  loadingMore: state.getUserOwnQuestionsLoadingMore,
  noMore: state.getUserOwnQuestionsNoMore,
  
  currentUser: state.currentUser,
  accessToken: state.accessToken,
  isLoggedUser: state.isLoggedUser,
})

const mapDispatchersToProps = dispatch => ({
  getUserOwnQuestionsRequest: () => dispatch(getUserOwnQuestionsRequest()),
  searchUserOwnQuestionsRequest: (query) => dispatch(searchUserOwnQuestionsRequest(query)),
  filterUserOwnQuestionsRequest: (topicID)=>dispatch(filterUserOwnQuestionsRequest(topicID)),
  getUserOwnQuestionsLoadMore: () => dispatch(getUserOwnQuestionsLoadMore())
})  
export default connect(mapStateToProps, mapDispatchersToProps)(MyQuestionsScreen)