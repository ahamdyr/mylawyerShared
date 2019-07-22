import NewQuestionsScreen from './NewQuestionsScreen'
import {connect} from 'react-redux'
import {
  getLawyerNewQuestionsRequest,
  filterLawyerNewQuestionsRequest,
  searchLawyerNewQuestionsRequest,
  getLawyerNewQuestionsLoadMore
} from '../../Redux/LawyerNewQuests/actions'

const mapStateToProps =  state => ({
  //questions: state.questions,
  questions: state.getLawyerNewQuestionsSuccess,
  questionsLoading: state.getLawyerNewQuestionsLoading,
  loadingMore: state.getLawyerNewQuestionsLoadingMore,
  noMore: state.getLawyerNewQuestionsNoMore,
  
  currentUser: state.currentUser,
  accessToken: state.accessToken,
  isLoggedUser: state.isLoggedUser,
})

const mapDispatchersToProps = dispatch => ({
  getLawyerNewQuestionsRequest: () => dispatch(getLawyerNewQuestionsRequest()),
  searchLawyerNewQuestionsRequest: (query) => dispatch(searchLawyerNewQuestionsRequest(query)),
  filterLawyerNewQuestionsRequest: (topicID)=>dispatch(filterLawyerNewQuestionsRequest(topicID)),
  getLawyerNewQuestionsLoadMore: () => dispatch(getLawyerNewQuestionsLoadMore())
})
export default connect(mapStateToProps, mapDispatchersToProps)(NewQuestionsScreen)