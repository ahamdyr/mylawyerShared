import AllQuestionsScreen from './AllQuestionsScreen'
import {connect} from 'react-redux'
import {
  getUserAllQuestionsRequest,
  searchUserAllQuestionsRequest,
  filterUserAllQuestionsRequest,
  getUserAllQuestionsLoadMore
} from '../../Redux/UserAllQuests/actions'

const mapStateToProps =  state => ({
  questions: state.questions,
  getUserAllQuestionsSuccess: state.getUserAllQuestionsSuccess,
  getUserAllQuestionsLoading: state.getUserAllQuestionsLoading,
  getUserAllQuestionsLoadingMore: state.getUserAllQuestionsLoadingMore,
  getUserAllQuestionsNoMore: state.getUserAllQuestionsNoMore,
  topicID: state.allQuestionsFilterTopic
})

const mapDispatchersToProps = dispatch => ({
  getUserAllQuestionsRequest: () => dispatch(getUserAllQuestionsRequest()),
  searchUserAllQuestionsRequest: (query) => dispatch(searchUserAllQuestionsRequest(query)),
  filterUserAllQuestionsRequest: (topicID) => dispatch(filterUserAllQuestionsRequest(topicID)),
  getUserAllQuestionsLoadMore: () => dispatch(getUserAllQuestionsLoadMore())
})  
export default connect(mapStateToProps, mapDispatchersToProps)(AllQuestionsScreen)