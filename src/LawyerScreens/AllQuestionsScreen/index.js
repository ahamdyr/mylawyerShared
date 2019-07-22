import AllQuestionsScreen from './AllQuestionsScreen'
import {connect} from 'react-redux'
import {
  getLawyerAllQuestionsRequest,
  filterLawyerAllQuestionsRequest,
  searchLawyerAllQuestionsRequest,
  getLawyerAllQuestionsLoadMore
} from '../../Redux/LawyerAllQuests/actions'

const mapStateToProps =  state => ({
  //questions: state.questions,
  questions: state.getLawyerAllQuestionsSuccess,
  questionsLoading: state.getLawyerAllQuestionsLoading,
  loadingMore: state.getLawyerAllQuestionsLoadingMore,
  noMore: state.getLawyerAllQuestionsNoMore,
  
  currentUser: state.currentUser,
  accessToken: state.accessToken,
  isLoggedUser: state.isLoggedUser,
})

const mapDispatchersToProps = dispatch => ({
  getLawyerAllQuestionsRequest: () => dispatch(getLawyerAllQuestionsRequest()),
  searchLawyerAllQuestionsRequest: (query) => dispatch(searchLawyerAllQuestionsRequest(query)),
  filterLawyerAllQuestionsRequest: (topicID)=>dispatch(filterLawyerAllQuestionsRequest(topicID)),
  getLawyerAllQuestionsLoadMore: () => dispatch(getLawyerAllQuestionsLoadMore())
})
export default connect(mapStateToProps, mapDispatchersToProps)(AllQuestionsScreen)