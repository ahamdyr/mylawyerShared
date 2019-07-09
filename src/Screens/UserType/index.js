import UserTypeScreen from './UserTypeScreen'
import {connect} from 'react-redux'
import {
  setUserType
} from '../../Redux/Auth/actions'

const mapStateToProps =  state => ({
})

  
const mapDispatchersToProps = dispatch => ({
  setUserType: (userType) => dispatch(setUserType(userType))
})


export default connect(mapStateToProps, mapDispatchersToProps)(UserTypeScreen)