import EditMyProfile from './EditMyProfile'
import {connect} from 'react-redux'
// import {
  
// } from '../../Redux/SideMenu/actions'

const mapStateToProps =  state => ({
  isLoggedUser: state.isLoggedUser,
  userPhoto: state.currentUser.photoURL,
  currentUser: state.currentUser
})

  
const mapDispatchersToProps = dispatch => ({
  
})


export default connect(mapStateToProps, mapDispatchersToProps)(EditMyProfile)