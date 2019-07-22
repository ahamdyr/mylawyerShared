import SideMenu from './SideMenu'
import {connect} from 'react-redux'
// import {
  
// } from '../../Redux/SideMenu/actions'

const mapStateToProps =  state => ({
  isLoggedUser: state.isLoggedUser,
  userPhoto: state.currentUser.photoURL,
  userType: state.userType
})

  
const mapDispatchersToProps = dispatch => ({
  
})


export default connect(mapStateToProps, mapDispatchersToProps)(SideMenu)