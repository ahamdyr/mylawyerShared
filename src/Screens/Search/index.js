import Search from './Search'
import {connect} from 'react-redux'
// import {
  
// } from '../../Redux/Search/actions'

const mapStateToProps =  state => ({
  // isLoggedUser: state.isLoggedUser,
  // userPhoto: state.currentUser.photoURL
})

  
const mapDispatchersToProps = dispatch => ({
  
})


export default connect(mapStateToProps, mapDispatchersToProps)(Search)