import SolvedQuestionsScreen from './SolvedQuestionsScreen'
import {connect} from 'react-redux'
import {
  getLawyerSolvedQuestionsRequest,
  filterLawyerSolvedQuestionsRequest,
  searchLawyerSolvedQuestionsRequest,
  getLawyerSolvedQuestionsLoadMore
} from '../../Redux/LawyerSolvedQuests/actions'

const mapStateToProps =  state => ({
  //questions: state.questions,
  questions: state.getLawyerSolvedQuestionsSuccess,
  questionsLoading: state.getLawyerSolvedQuestionsLoading,
  loadingMore: state.getLawyerSolvedQuestionsLoadingMore,
  noMore: state.getLawyerSolvedQuestionsNoMore,
  
  currentUser: state.currentUser,
  accessToken: state.accessToken,
  isLoggedUser: state.isLoggedUser,
})

const mapDispatchersToProps = dispatch => ({
  getLawyerSolvedQuestionsRequest: () => dispatch(getLawyerSolvedQuestionsRequest()),
  searchLawyerSolvedQuestionsRequest: (query) => dispatch(searchLawyerSolvedQuestionsRequest(query)),
  filterLawyerSolvedQuestionsRequest: (topicID)=>dispatch(filterLawyerSolvedQuestionsRequest(topicID)),
  getLawyerSolvedQuestionsLoadMore: () => dispatch(getLawyerSolvedQuestionsLoadMore())
})
export default connect(mapStateToProps, mapDispatchersToProps)(SolvedQuestionsScreen)