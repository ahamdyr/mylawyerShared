import Search from './Search'
import {connect} from 'react-redux'
import {
  searchLawyersRequest,
  // getLawyersRequest,
  // getLawyersSuccess
} from '../../Redux/LawyersList/actions'

const mapStateToProps =  state => ({
  searchLawyersSuccess: state.searchLawyersSuccess,
  //getLawyersLoading: state.getLawyersLoading
  // isLoggedUser: state.isLoggedUser,
  // userPhoto: state.currentUser.photoURL
})

  
const mapDispatchersToProps = dispatch => ({
  searchLawyersRequest: (query)=>dispatch(searchLawyersRequest(query)),
  // getLawyersRequest: ()=>dispatch(getLawyersRequest()),
  // getLawyersSuccess: ()=>dispatch(getLawyersSuccess())
})


export default connect(mapStateToProps, mapDispatchersToProps)(Search)