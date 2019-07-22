import Settings from './Settings'
import {connect} from 'react-redux'
// import {
  
// } from '../../Redux/SideMenu/actions'

const mapStateToProps =  state => ({
  isLoggedUser: state.isLoggedUser,
  userPhoto: state.currentUser.photoURL
})

  
const mapDispatchersToProps = dispatch => ({
  
})


export default connect(mapStateToProps, mapDispatchersToProps)(Settings)