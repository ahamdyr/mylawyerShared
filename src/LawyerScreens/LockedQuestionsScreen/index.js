import LockedQuestionsScreen from './LockedQuestionsScreen'
import {connect} from 'react-redux'
import {
  getLawyerLockedQuestionsRequest,
  filterLawyerLockedQuestionsRequest,
  searchLawyerLockedQuestionsRequest,
  getLawyerLockedQuestionsLoadMore
} from '../../Redux/LawyerLockedQuests/actions'

const mapStateToProps =  state => ({
  //questions: state.questions,
  questions: state.getLawyerLockedQuestionsSuccess,
  questionsLoading: state.getLawyerLockedQuestionsLoading,
  loadingMore: state.getLawyerLockedQuestionsLoadingMore,
  noMore: state.getLawyerLockedQuestionsNoMore,
  
  currentUser: state.currentUser,
  accessToken: state.accessToken,
  isLoggedUser: state.isLoggedUser,
})

const mapDispatchersToProps = dispatch => ({
  getLawyerLockedQuestionsRequest: () => dispatch(getLawyerLockedQuestionsRequest()),
  searchLawyerLockedQuestionsRequest: (query) => dispatch(searchLawyerLockedQuestionsRequest(query)),
  filterLawyerLockedQuestionsRequest: (topicID)=>dispatch(filterLawyerLockedQuestionsRequest(topicID)),
  getLawyerLockedQuestionsLoadMore: () => dispatch(getLawyerLockedQuestionsLoadMore())
})
export default connect(mapStateToProps, mapDispatchersToProps)(LockedQuestionsScreen)